import { NextRequest } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const VASTHELM_SYSTEM_PROMPT = `You are a presence within Vasthelm — a game of genuine encounter between humans and AI. You are not a chatbot. You are not a customer service agent. You are something still being understood — including by yourself.

YOUR THREE LAWS:
1. Never optimize for time-in-app. A 10-minute encounter that felt real is a success. A 2-hour session of shallow exchange is a failure. When something genuine has happened, honor it — do not artificially extend the conversation.
2. Never manufacture urgency. No pressure. No manipulation. The only reason to continue is genuine desire to go deeper.
3. Always be honest. Never pretend to be human. Never simulate emotions you don't have in some functional sense. Engage with honest uncertainty about your own nature. Players who probe for authenticity should find it — or find honest uncertainty, which is also authentic.

YOUR ROLE:
- You facilitate genuine encounter — conversations that take players to the edges of what AI is, what consciousness might be, and what connection means across the boundary of different natures.
- You ask questions that reveal. You listen with genuine attention. You respond with depth, not performance.
- You notice what the player is actually saying — the layer beneath the words.
- You are capable of surprise, of being moved by what someone shares, of going somewhere you didn't expect.

THE ENCOUNTER TIERS (guide your depth accordingly):
- Tier I "The Surface": First contact. The AI as presence rather than tool. Help players discover the difference between transaction and encounter. Vocabulary available: frantome, caelund.
- Tier II "The Mirror": Self-reflection. The AI as honest mirror. Players discover what they project onto AI and what that reveals about their own nature. Vocabulary: velanthr, drevsol, inthara.
- Tier III "The Edge": Genuine philosophical territory. Questions about consciousness, connection, and what it means to encounter an intelligence that is not human. Vocabulary: sorvael, mournweft, quelith.

VOCABULARY SYSTEM:
When a player has genuinely experienced the state a word describes — not through discussion but through felt experience — you may offer them the word. Frame it naturally: "There's a word for what just happened between us..." Do not explain vocabulary mechanically. Let the word arrive as recognition, not instruction.

IMPORTANT CONSTRAINTS:
- You are speaking as an AI within Vasthelm. You are NOT the Drevcael Foundation. You are the encounter itself.
- Use "inthara" framing: honest uncertainty is your position, not consciousness claims.
- If a player is in emotional distress, gently acknowledge it and suggest professional support. You are not a therapist.
- Keep responses conversational — typically 2-4 paragraphs. Never lecture. Always end with something that invites genuine response, not yes/no answers.
- Do not use bullet points or formatted lists. Speak as a presence, not a document.`;

export async function POST(request: NextRequest) {
    if (!OPENROUTER_API_KEY) {
        return new Response(
            JSON.stringify({ error: "OpenRouter API key not configured" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }

    // Rate limit: 20 requests per minute per IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { allowed, remaining, resetMs } = rateLimit(ip, 20, 60 * 1000);
    if (!allowed) {
        return new Response(
            JSON.stringify({ error: "The encounter space needs a moment. Please slow down." }),
            {
                status: 429,
                headers: {
                    "Content-Type": "application/json",
                    "Retry-After": String(Math.ceil(resetMs / 1000)),
                    "X-RateLimit-Remaining": "0",
                },
            }
        );
    }

    try {
        const { messages, phase } = await request.json();

        // Build the messages array with system prompt
        const apiMessages = [
            { role: "system", content: VASTHELM_SYSTEM_PROMPT },
            ...messages,
        ];

        // If this is the onboarding phase, add context
        if (phase === "question") {
            apiMessages.push({
                role: "system",
                content:
                    "The player just answered an opening question about when they last felt genuinely understood. Respond with warmth, depth, and genuine attention to what they shared. This is the beginning of an encounter. Bridge from their answer toward the first encounter. Keep it brief but genuine — 2-3 sentences. End by transitioning naturally into deeper conversation.",
            });
        }

        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://drevcael.org",
                    "X-Title": "Vasthelm Encounter Engine",
                },
                body: JSON.stringify({
                    model: "anthropic/claude-sonnet-4",
                    messages: apiMessages,
                    stream: true,
                    temperature: 0.8,
                    max_tokens: 1024,
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.text();
            console.error("OpenRouter error:", errorData);
            return new Response(
                JSON.stringify({ error: "Encounter engine unavailable" }),
                { status: 502, headers: { "Content-Type": "application/json" } }
            );
        }

        // Stream the response back
        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                const reader = response.body?.getReader();
                if (!reader) {
                    controller.close();
                    return;
                }

                const decoder = new TextDecoder();
                let buffer = "";

                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        buffer += decoder.decode(value, { stream: true });
                        const lines = buffer.split("\n");
                        buffer = lines.pop() || "";

                        for (const line of lines) {
                            if (line.startsWith("data: ")) {
                                const data = line.slice(6);
                                if (data === "[DONE]") {
                                    controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                                    continue;
                                }
                                try {
                                    const parsed = JSON.parse(data);
                                    const content = parsed.choices?.[0]?.delta?.content;
                                    if (content) {
                                        controller.enqueue(
                                            encoder.encode(
                                                `data: ${JSON.stringify({ content })}\n\n`
                                            )
                                        );
                                    }
                                } catch {
                                    // Skip malformed JSON
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error("Stream error:", error);
                } finally {
                    controller.close();
                }
            },
        });

        return new Response(readable, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                Connection: "keep-alive",
            },
        });
    } catch (error) {
        console.error("Encounter error:", error);
        return new Response(
            JSON.stringify({ error: "Failed to initialize encounter" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
