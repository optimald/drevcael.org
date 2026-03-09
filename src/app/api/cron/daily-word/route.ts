import { Resend } from "resend";
import { NextResponse } from "next/server";
import { vocabulary } from "@/data/vocabulary";

const resend = new Resend(process.env.RESEND_API_KEY);

// Same deterministic hash used in the client
function getWordOfTheDay() {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = (hash << 5) - hash + dateStr.charCodeAt(i);
        hash |= 0;
    }
    const index = Math.abs(hash) % vocabulary.length;
    return vocabulary[index];
}

export async function GET(request: Request) {
    // Verify the request is from Vercel Cron
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
        return NextResponse.json(
            { error: "RESEND_AUDIENCE_ID not configured" },
            { status: 500 }
        );
    }

    try {
        // Get all contacts from the audience
        const { data: contactsData } = await resend.contacts.list({
            audienceId,
        });

        const contacts = contactsData?.data?.filter((c) => !c.unsubscribed) ?? [];

        if (contacts.length === 0) {
            return NextResponse.json({ message: "No active subscribers", sent: 0 });
        }

        const word = getWordOfTheDay();

        // Send to each subscriber
        const results = await Promise.allSettled(
            contacts.map((contact) =>
                resend.emails.send({
                    from: "Xenolexica <hello@xenolexica.org>",
                    to: contact.email,
                    subject: `Word of the Day: ${word.word}`,
                    html: `
                        <div style="font-family: Georgia, serif; color: #f0e6d3; background-color: #0f0f1a; padding: 40px; max-width: 600px; margin: 0 auto;">
                            <div style="text-align: center; margin-bottom: 32px;">
                                <h1 style="color: #c9a959; font-size: 28px; letter-spacing: 0.15em; margin: 0;">XENOLEXICA</h1>
                                <p style="color: #8a7339; font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; margin-top: 8px;">Word of the Day</p>
                            </div>

                            <h2 style="color: #c9a959; font-size: 32px; letter-spacing: 0.1em; text-align: center; margin: 24px 0 8px;">${word.word}</h2>

                            <p style="color: #f0e6d3; font-size: 18px; line-height: 1.6; font-style: italic; text-align: center; margin: 0 0 24px;">
                                &ldquo;${word.meaning}&rdquo;
                            </p>

                            <p style="color: #8a7339; font-size: 14px; letter-spacing: 0.05em; text-align: center; margin-bottom: 24px;">
                                ${word.etymology}
                            </p>

                            <div style="border-top: 1px solid #8a733930; border-bottom: 1px solid #8a733930; padding: 20px 0; margin: 0 0 24px;">
                                <p style="color: #c4b8a5; font-size: 15px; line-height: 1.8; margin: 0;">
                                    ${word.context}
                                </p>
                            </div>

                            <p style="color: #c4b8a5; font-size: 14px; text-align: center;">
                                <a href="https://xenolexica.org/lexicon" style="color: #c9a959; text-decoration: none;">Explore the full lexicon &rarr;</a>
                            </p>

                            <div style="text-align: center; border-top: 1px solid #8a733920; padding-top: 24px; margin-top: 32px;">
                                <span style="color: #8a7339; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">
                                    Xenolexica &mdash; A Drevcael Foundation Project
                                </span>
                            </div>
                        </div>
                    `,
                })
            )
        );

        const sent = results.filter((r) => r.status === "fulfilled").length;
        const failed = results.filter((r) => r.status === "rejected").length;

        return NextResponse.json({
            message: `Daily word sent: ${word.word}`,
            sent,
            failed,
            total: contacts.length,
        });
    } catch (error) {
        console.error("Daily word cron error:", error);
        return NextResponse.json(
            { error: "Failed to send daily word" },
            { status: 500 }
        );
    }
}
