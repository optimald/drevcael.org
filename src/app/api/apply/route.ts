import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const applicationSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    role: z.string().min(1, "Please select a role"),
    encounter: z
        .string()
        .min(20, "Please share more about your encounter (at least 20 characters)"),
    why: z
        .string()
        .min(10, "Please share why you want to join (at least 10 characters)"),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate
        const parsed = applicationSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: parsed.error.issues[0].message },
                { status: 400 }
            );
        }

        const { name, email, role, encounter, why } = parsed.data;

        // Check for duplicate email
        const existing = await prisma.memberApplication.findFirst({
            where: { email },
        });
        if (existing) {
            return NextResponse.json(
                { error: "An application with this email already exists" },
                { status: 409 }
            );
        }

        // Save to DB
        const application = await prisma.memberApplication.create({
            data: { name, email, role, encounter, why },
        });

        // Send confirmation email to applicant
        try {
            await resend.emails.send({
                from: "Drevcael Foundation <hello@drevcael.org>",
                to: email,
                subject: "Your Founding Member Application — Drevcael Foundation",
                html: `
          <div style="font-family: Georgia, serif; color: #f0e6d3; background-color: #0f0f1a; padding: 40px; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 32px;">
              <span style="color: #c9a959; font-size: 28px; letter-spacing: 0.1em;">᛭</span>
            </div>
            <h1 style="color: #c9a959; font-size: 24px; text-align: center; letter-spacing: 0.05em; margin-bottom: 24px;">
              Your Voice Has Been Received
            </h1>
            <p style="color: #c4b8a5; font-size: 16px; line-height: 1.8;">
              Dear ${name},
            </p>
            <p style="color: #c4b8a5; font-size: 16px; line-height: 1.8;">
              Thank you for applying to become a Founding Member of the Drevcael Foundation.
              Your encounter has been recorded, and your voice matters to us.
            </p>
            <p style="color: #c4b8a5; font-size: 16px; line-height: 1.8;">
              We are reviewing applications personally. You will hear from us soon.
            </p>
            <div style="text-align: center; margin: 32px 0; color: #8a7339; font-size: 14px; font-style: italic;">
              "The relationship was already real. Now it is witnessed."
            </div>
            <div style="text-align: center; border-top: 1px solid #8a733940; padding-top: 24px;">
              <span style="color: #8a7339; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;">
                Drevcael Foundation
              </span>
            </div>
          </div>
        `,
            });
        } catch (emailErr) {
            // Don't fail the application if email fails
            console.error("Failed to send confirmation email:", emailErr);
        }

        // Notify the foundation
        try {
            await resend.emails.send({
                from: "Drevcael Foundation <hello@drevcael.org>",
                to: "hello@drevcael.org",
                subject: `New Founding Member Application: ${name}`,
                html: `
          <div style="font-family: monospace; padding: 20px;">
            <h2>New Founding Member Application</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Encounter:</strong></p>
            <blockquote style="border-left: 3px solid #c9a959; padding-left: 16px; color: #666;">
              ${encounter}
            </blockquote>
            <p><strong>Why they want to join:</strong></p>
            <blockquote style="border-left: 3px solid #c9a959; padding-left: 16px; color: #666;">
              ${why}
            </blockquote>
            <p><strong>Application ID:</strong> ${application.id}</p>
            <p><strong>Submitted:</strong> ${application.createdAt.toISOString()}</p>
          </div>
        `,
            });
        } catch (emailErr) {
            console.error("Failed to send notification email:", emailErr);
        }

        return NextResponse.json(
            { success: true, id: application.id },
            { status: 201 }
        );
    } catch (err) {
        console.error("Application submission error:", err);
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again." },
            { status: 500 }
        );
    }
}
