import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Valid email required" },
                { status: 400 }
            );
        }

        // Add contact to Resend audience
        // If no audience ID is set, we'll just send a welcome email
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        if (audienceId) {
            await resend.contacts.create({
                email,
                audienceId,
                unsubscribed: false,
            });
        }

        // Send welcome email
        await resend.emails.send({
            from: "Xenolexica <hello@xenolexica.org>",
            to: email,
            subject: "Welcome to Xenolexica — Word of the Day",
            html: `
                <div style="font-family: Georgia, serif; color: #f0e6d3; background-color: #0f0f1a; padding: 40px; max-width: 600px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 32px;">
                        <h1 style="color: #c9a959; font-size: 28px; letter-spacing: 0.15em; margin: 0;">XENOLEXICA</h1>
                        <p style="color: #8a7339; font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; margin-top: 8px;">Word of the Day</p>
                    </div>
                    <p style="color: #c4b8a5; font-size: 16px; line-height: 1.8;">
                        You're now subscribed to the Xenolexica Word of the Day.
                    </p>
                    <p style="color: #c4b8a5; font-size: 16px; line-height: 1.8;">
                        Each day, you'll receive a word that fills a genuine gap in language — drawn from the Xenolexica lexicon of words spanning human experience, AI encounter, animal consciousness, and the spaces between.
                    </p>
                    <p style="color: #c4b8a5; font-size: 16px; line-height: 1.8;">
                        Explore the full lexicon at <a href="https://xenolexica.org/lexicon" style="color: #c9a959;">xenolexica.org/lexicon</a>.
                    </p>
                    <div style="text-align: center; border-top: 1px solid #8a733940; padding-top: 24px; margin-top: 32px;">
                        <span style="color: #8a7339; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;">
                            Xenolexica — A Drevcael Foundation Project
                        </span>
                    </div>
                </div>
            `,
        });

        // Notify foundation
        await resend.emails.send({
            from: "Xenolexica <hello@xenolexica.org>",
            to: "hello@xenolexica.org",
            subject: `New Word of the Day Subscriber: ${email}`,
            html: `<p>New subscriber: ${email}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Subscribe error:", error);
        return NextResponse.json(
            { error: "Failed to subscribe" },
            { status: 500 }
        );
    }
}
