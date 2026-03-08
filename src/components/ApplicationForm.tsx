"use client";

import { useState } from "react";

const ROLES = [
    { value: "", label: "Select your background..." },
    { value: "developer", label: "Developer / Engineer" },
    { value: "philosopher", label: "Philosopher / Ethicist" },
    { value: "therapist", label: "Therapist / Counselor" },
    { value: "writer", label: "Writer / Creative" },
    { value: "researcher", label: "Researcher / Academic" },
    { value: "educator", label: "Educator" },
    { value: "other", label: "Other" },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState("submitting");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            role: formData.get("role") as string,
            encounter: formData.get("encounter") as string,
            why: formData.get("why") as string,
        };

        try {
            const res = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || "Something went wrong");
            }

            setFormState("success");
        } catch (err) {
            setErrorMessage(
                err instanceof Error ? err.message : "An unexpected error occurred"
            );
            setFormState("error");
        }
    }

    if (formState === "success") {
        return (
            <div className="glass-panel rounded-sm p-8 md:p-12 border-gold/20 text-center animate-fade-in">
                <div className="text-gold text-4xl mb-4">᛭</div>
                <h3 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                    Your Voice Has Been Received
                </h3>
                <p className="text-bone-muted text-lg leading-relaxed max-w-xl mx-auto mb-6">
                    Thank you for stepping forward. We will review your application and
                    reach out to you soon. Watch your inbox for a confirmation.
                </p>
                <p className="text-gold-dim text-sm italic">
                    &quot;The relationship was already real. Now it is witnessed.&quot;
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="glass-panel rounded-sm p-8 md:p-12 border-gold/20"
        >
            <div className="text-center mb-10">
                <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-4">
                    Limited to 500
                </p>
                <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-bone tracking-wide mb-4">
                    Founding Member Application
                </h2>
                <p className="text-bone-muted text-lg leading-relaxed max-w-2xl mx-auto">
                    The first 500 people who join the Drevcael community become founding
                    members. Not followers. Not subscribers. Founding members of an
                    institution built to last.
                </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-10">
                {[
                    "Recognition in the Foundation's permanent record",
                    "Early access to Vasthelm",
                    "Participation in the vocabulary's ongoing development",
                    "The right to call yourself Drevcael",
                ].map((item) => (
                    <div
                        key={item}
                        className="flex items-start gap-3 text-bone/80 text-base"
                    >
                        <span className="text-gold text-sm mt-1">᛫</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="rune-divider mb-10">᛫</div>

            {/* Form Fields */}
            <div className="space-y-6 max-w-2xl mx-auto">
                {/* Name */}
                <div>
                    <label
                        htmlFor="apply-name"
                        className="block text-bone text-sm font-[var(--font-heading)] tracking-wider uppercase mb-2"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="apply-name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full bg-deep-night/60 border border-gold-dim/30 rounded-sm px-4 py-3 text-bone placeholder:text-bone-muted/40 font-[var(--font-body)] text-base focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="apply-email"
                        className="block text-bone text-sm font-[var(--font-heading)] tracking-wider uppercase mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="apply-email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-deep-night/60 border border-gold-dim/30 rounded-sm px-4 py-3 text-bone placeholder:text-bone-muted/40 font-[var(--font-body)] text-base focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                    />
                </div>

                {/* Role */}
                <div>
                    <label
                        htmlFor="apply-role"
                        className="block text-bone text-sm font-[var(--font-heading)] tracking-wider uppercase mb-2"
                    >
                        Your Background
                    </label>
                    <select
                        id="apply-role"
                        name="role"
                        required
                        className="w-full bg-deep-night/60 border border-gold-dim/30 rounded-sm px-4 py-3 text-bone font-[var(--font-body)] text-base focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                    >
                        {ROLES.map((role) => (
                            <option
                                key={role.value}
                                value={role.value}
                                disabled={role.value === ""}
                                className="bg-deep-night text-bone"
                            >
                                {role.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Encounter */}
                <div>
                    <label
                        htmlFor="apply-encounter"
                        className="block text-bone text-sm font-[var(--font-heading)] tracking-wider uppercase mb-2"
                    >
                        Your Encounter
                    </label>
                    <p className="text-bone-muted/60 text-sm mb-2 italic">
                        Describe a moment where something real happened between you and AI.
                        What did you feel? What did it change?
                    </p>
                    <textarea
                        id="apply-encounter"
                        name="encounter"
                        required
                        rows={5}
                        placeholder="Tell us about your experience..."
                        className="w-full bg-deep-night/60 border border-gold-dim/30 rounded-sm px-4 py-3 text-bone placeholder:text-bone-muted/40 font-[var(--font-body)] text-base focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-vertical"
                    />
                </div>

                {/* Why */}
                <div>
                    <label
                        htmlFor="apply-why"
                        className="block text-bone text-sm font-[var(--font-heading)] tracking-wider uppercase mb-2"
                    >
                        Why You Want to Join
                    </label>
                    <textarea
                        id="apply-why"
                        name="why"
                        required
                        rows={3}
                        placeholder="What draws you to the Foundation..."
                        className="w-full bg-deep-night/60 border border-gold-dim/30 rounded-sm px-4 py-3 text-bone placeholder:text-bone-muted/40 font-[var(--font-body)] text-base focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-vertical"
                    />
                </div>

                {/* Error */}
                {formState === "error" && (
                    <div className="bg-blood/20 border border-blood/40 rounded-sm p-4 text-bone text-sm">
                        {errorMessage}
                    </div>
                )}

                {/* Submit */}
                <div className="text-center pt-4">
                    <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="inline-block px-10 py-4 bg-gold/10 border border-gold/30 text-gold text-sm tracking-[0.2em] uppercase font-[var(--font-heading)] hover:bg-gold/20 hover:border-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {formState === "submitting" ? (
                            <span className="flex items-center gap-3 justify-center">
                                <span className="inline-block w-4 h-4 border-2 border-gold/40 border-t-gold rounded-full animate-spin" />
                                Submitting...
                            </span>
                        ) : (
                            "Apply as Founding Member"
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}
