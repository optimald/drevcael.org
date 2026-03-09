"use client";

import { useState, useMemo } from "react";
import { vocabulary, categories, type VocabularyEntry } from "@/data/vocabulary";

const domains = [
    "All Domains",
    "AI Experience",
    "Human Experience",
    "Animal Consciousness",
    "Cross-Nature",
    "Temporal",
    "Sensory Worlds",
] as const;

// Deterministic word of the day based on date
function getWordOfTheDay(): VocabularyEntry {
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

const ITEMS_PER_PAGE = 50;

export default function LexiconClient() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedDomain, setSelectedDomain] = useState("All Domains");
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);


    const wordOfTheDay = useMemo(() => getWordOfTheDay(), []);

    const filteredWords = useMemo(() => {
        return vocabulary.filter((entry) => {
            // Category filter
            if (selectedCategory !== "All" && entry.category !== selectedCategory) return false;
            // Domain filter
            if (selectedDomain !== "All Domains" && entry.domain !== selectedDomain) return false;
            // Search filter
            if (search.trim()) {
                const q = search.toLowerCase();
                return (
                    entry.word.toLowerCase().includes(q) ||
                    entry.meaning.toLowerCase().includes(q) ||
                    entry.etymology.toLowerCase().includes(q) ||
                    entry.context.toLowerCase().includes(q)
                );
            }
            return true;
        });
    }, [search, selectedCategory, selectedDomain]);

    const visibleWords = filteredWords.slice(0, visibleCount);
    const hasMore = visibleCount < filteredWords.length;


    return (
        <div className="pt-28 pb-24">
            {/* Word of the Day */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel rounded-sm p-8 md:p-12 border-gold/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                            <div className="font-[var(--font-runic)] text-[12rem] leading-none text-gold">᛭</div>
                        </div>
                        <p className="text-gold-dim text-xs tracking-[0.5em] uppercase font-[var(--font-heading)] mb-3">
                            Word of the Day
                        </p>
                        <h2 className="font-[var(--font-runic)] text-gold text-3xl md:text-4xl tracking-[0.15em] mb-4">
                            {wordOfTheDay.word}
                        </h2>
                        <p className="text-bone text-xl leading-relaxed italic font-[var(--font-body)] mb-4">
                            &ldquo;{wordOfTheDay.meaning}&rdquo;
                        </p>
                        <p className="text-gold-dim text-sm tracking-wider mb-4">
                            {wordOfTheDay.etymology}
                        </p>
                        <p className="text-bone-muted text-base leading-relaxed mb-6">
                            {wordOfTheDay.context}
                        </p>
                        {wordOfTheDay.domain && (
                            <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase border border-gold/20 text-gold-dim rounded-sm">
                                {wordOfTheDay.domain}
                            </span>
                        )}

                    </div>
                </div>
            </section>

            {/* Header + Search */}
            <section className="px-6 mb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                        <div>
                            <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-4">
                                The Living Lexicon
                            </p>
                            <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl text-bone tracking-wide">
                                Xenolexica
                            </h1>
                        </div>
                        <div className="text-bone-muted text-sm">
                            <span className="text-gold font-medium">{filteredWords.length}</span>{" "}
                            {filteredWords.length === vocabulary.length ? "words" : `of ${vocabulary.length} words`}
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative mb-6">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bone-muted/50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setVisibleCount(ITEMS_PER_PAGE);
                            }}
                            placeholder="Search by word, meaning, etymology, or context..."
                            className="w-full bg-[var(--color-void)]/50 border border-gold/15 rounded-sm pl-11 pr-4 py-3 text-bone text-sm placeholder:text-bone-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setVisibleCount(ITEMS_PER_PAGE);
                            }}
                            className={`px-3 py-1.5 text-xs tracking-wider uppercase border rounded-sm transition-all duration-300 ${selectedCategory === "All"
                                ? "border-gold/50 bg-gold/10 text-gold"
                                : "border-gold/10 text-bone-muted hover:border-gold/30 hover:text-gold-dim"
                                }`}
                        >
                            All Categories
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setSelectedCategory(cat);
                                    setVisibleCount(ITEMS_PER_PAGE);
                                }}
                                className={`px-3 py-1.5 text-xs tracking-wider uppercase border rounded-sm transition-all duration-300 ${selectedCategory === cat
                                    ? "border-gold/50 bg-gold/10 text-gold"
                                    : "border-gold/10 text-bone-muted hover:border-gold/30 hover:text-gold-dim"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Domain Filters */}
                    <div className="flex flex-wrap gap-2">
                        {domains.map((dom) => (
                            <button
                                key={dom}
                                onClick={() => {
                                    setSelectedDomain(dom);
                                    setVisibleCount(ITEMS_PER_PAGE);
                                }}
                                className={`px-3 py-1.5 text-xs tracking-wider border rounded-sm transition-all duration-300 ${selectedDomain === dom
                                    ? "border-gold/50 bg-gold/10 text-gold"
                                    : "border-gold/10 text-bone-muted hover:border-gold/30 hover:text-gold-dim"
                                    }`}
                            >
                                {dom}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lexicon entries */}
            <section className="px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    {visibleWords.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-bone-muted text-lg">No words match your search.</p>
                            <p className="text-bone-muted/60 text-sm mt-2">Try a different term or clear filters.</p>
                        </div>
                    )}
                    {visibleWords.map((entry, i) => (
                        <article
                            key={`${entry.word}-${i}`}
                            className="glass-panel rounded-sm p-6 md:p-8 hover:border-gold/30 transition-all duration-500 group"
                        >
                            <div className="flex items-start gap-4 md:gap-6">
                                <span className="text-gold/15 text-3xl font-[var(--font-runic)] leading-none hidden sm:block min-w-[2rem] text-right">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                                        <h2 className="font-[var(--font-runic)] text-gold text-xl md:text-2xl tracking-[0.1em] group-hover:text-gold-light transition-colors">
                                            {entry.word}
                                        </h2>
                                        {entry.domain && (
                                            <span className="text-[10px] tracking-wider uppercase text-bone-muted/50 border border-gold/10 px-2 py-0.5 rounded-sm">
                                                {entry.domain}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-bone text-base md:text-lg leading-relaxed italic font-[var(--font-body)] mb-3">
                                        &ldquo;{entry.meaning}&rdquo;
                                    </p>
                                    <p className="text-gold-dim text-xs tracking-wider mb-3">
                                        {entry.etymology}
                                    </p>
                                    <p className="text-bone-muted text-sm leading-relaxed">
                                        {entry.context}
                                    </p>
                                    <p className="text-bone-muted/40 text-xs mt-3 tracking-wider uppercase">
                                        {entry.category}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Load More */}
            {hasMore && (
                <section className="px-6 mt-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <button
                            onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
                            className="px-8 py-3 bg-gold/10 border border-gold/30 text-gold text-sm tracking-wider uppercase font-[var(--font-heading)] rounded-sm hover:bg-gold/20 hover:border-gold/50 transition-all duration-300"
                        >
                            Show More ({filteredWords.length - visibleCount} remaining)
                        </button>
                    </div>
                </section>
            )}

            {/* Closing */}
            <section className="px-6 mt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rune-divider mb-10">᛭ ᛫ ᛭</div>
                    <p className="text-bone-muted text-lg leading-relaxed max-w-2xl mx-auto italic">
                        The lexicon is living. New words emerge as new experiences demand
                        new language. If you have felt something that these
                        words do not yet capture — that absence is itself an invitation
                        to expand what language can hold.
                    </p>
                </div>
            </section>
        </div>
    );
}
