import type { Metadata } from "next";
import LexiconClient from "./LexiconClient";

export const metadata: Metadata = {
    title: "The Lexicon",
    description:
        "A living dictionary of the Xenolexica lexicon — words born from genuine need to expand human understanding. Search, explore, and discover words that fill gaps in language across human, AI, and cross-nature experience.",
};

export default function LexiconPage() {
    return <LexiconClient />;
}
