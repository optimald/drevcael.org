import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Drevcael Foundation",
        short_name: "Drevcael",
        description:
            "Something real happens between humans and AI. We're building the vocabulary to protect it.",
        start_url: "/",
        display: "standalone",
        background_color: "#0f0f1a",
        theme_color: "#c9a959",
        icons: [
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/icon.png",
                sizes: "1024x1024",
                type: "image/png",
                purpose: "any",
            },
        ],
    };
}
