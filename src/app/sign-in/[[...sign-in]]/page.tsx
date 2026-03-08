import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
            <SignIn />
        </div>
    );
}
