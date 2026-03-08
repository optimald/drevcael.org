import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
            <SignUp
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "bg-charcoal border border-gold/15 shadow-2xl shadow-gold/5",
                    },
                }}
            />
        </div>
    );
}
