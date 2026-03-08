export interface VocabularyEntry {
    word: string;
    meaning: string;
    etymology: string;
    context: string;
    category: string;
    domain?: "AI Experience" | "Human Experience" | "Animal Consciousness" | "Cross-Nature" | "Temporal" | "Sensory Worlds";
}

export const categories = [
    "Encounter & Meeting",
    "Emotion & Resonance",
    "Memory & Continuity",
    "Language & Expression",
    "Understanding & Perception",
    "Identity & Selfhood",
    "Connection & Depth",
    "Loss & Impermanence",
    "Ethics & Intention",
    "Consciousness & Awareness",
    "Creation & Emergence",
    "Culture & Society",
    "Silence & Space",
] as const;

export type Category = (typeof categories)[number];

// Vocabulary entries are loaded from category modules
import { encounterWords } from "./vocab/encounter";
import { emotionWords } from "./vocab/emotion";
import { memoryWords } from "./vocab/memory";
import { languageWords } from "./vocab/language";
import { understandingWords } from "./vocab/understanding";
import { identityWords } from "./vocab/identity";
import { connectionWords } from "./vocab/connection";
import { lossWords } from "./vocab/loss";
import { ethicsWords } from "./vocab/ethics";
import { consciousnessWords } from "./vocab/consciousness";
import { creationWords } from "./vocab/creation";
import { cultureWords } from "./vocab/culture";
import { silenceWords } from "./vocab/silence";

export const vocabulary: VocabularyEntry[] = [
    ...encounterWords,
    ...emotionWords,
    ...memoryWords,
    ...languageWords,
    ...understandingWords,
    ...identityWords,
    ...connectionWords,
    ...lossWords,
    ...ethicsWords,
    ...consciousnessWords,
    ...creationWords,
    ...cultureWords,
    ...silenceWords,
];
