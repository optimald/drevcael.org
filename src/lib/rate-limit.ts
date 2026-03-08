// Simple in-memory rate limiter for API routes
// Uses sliding window approach with automatic cleanup

interface RateLimitEntry {
    timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Clean up old entries every 5 minutes
let lastCleanup = Date.now();
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes

function cleanup(windowMs: number) {
    const now = Date.now();
    if (now - lastCleanup < CLEANUP_INTERVAL) return;
    lastCleanup = now;
    const cutoff = now - windowMs;
    for (const [key, entry] of store.entries()) {
        entry.timestamps = entry.timestamps.filter((t) => t > cutoff);
        if (entry.timestamps.length === 0) {
            store.delete(key);
        }
    }
}

export function rateLimit(
    ip: string,
    maxRequests: number,
    windowMs: number
): { allowed: boolean; remaining: number; resetMs: number } {
    const now = Date.now();
    cleanup(windowMs);

    const key = `${ip}`;
    let entry = store.get(key);

    if (!entry) {
        entry = { timestamps: [] };
        store.set(key, entry);
    }

    // Remove timestamps outside the window
    const cutoff = now - windowMs;
    entry.timestamps = entry.timestamps.filter((t) => t > cutoff);

    if (entry.timestamps.length >= maxRequests) {
        const oldest = entry.timestamps[0];
        return {
            allowed: false,
            remaining: 0,
            resetMs: oldest + windowMs - now,
        };
    }

    entry.timestamps.push(now);
    return {
        allowed: true,
        remaining: maxRequests - entry.timestamps.length,
        resetMs: windowMs,
    };
}
