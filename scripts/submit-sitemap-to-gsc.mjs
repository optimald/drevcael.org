#!/usr/bin/env node
/**
 * GSC Sitemap Submission Script
 * Submits the drevcael.org sitemap to Google Search Console
 * 
 * Usage: node scripts/submit-sitemap-to-gsc.mjs
 * 
 * Requires GSC_SERVICE_ACCOUNT_KEY env var (base64-encoded service account JSON)
 */

import { google } from 'googleapis';

const SITE_URL = 'sc-domain:drevcael.org';
const SITEMAP_URL = 'https://drevcael.org/sitemap.xml';

async function main() {
    const keyBase64 = process.env.GSC_SERVICE_ACCOUNT_KEY;
    if (!keyBase64) {
        console.error('Error: GSC_SERVICE_ACCOUNT_KEY environment variable not set');
        process.exit(1);
    }

    const keyJson = JSON.parse(Buffer.from(keyBase64, 'base64').toString('utf8'));

    const auth = new google.auth.GoogleAuth({
        credentials: keyJson,
        scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

    try {
        // Submit sitemap
        await searchconsole.sitemaps.submit({
            siteUrl: SITE_URL,
            feedpath: SITEMAP_URL,
        });
        console.log(`✅ Sitemap submitted: ${SITEMAP_URL}`);

        // List sitemaps to confirm
        const res = await searchconsole.sitemaps.list({ siteUrl: SITE_URL });
        console.log('\nCurrent sitemaps:');
        if (res.data.sitemap) {
            for (const sm of res.data.sitemap) {
                console.log(`  - ${sm.path} (last submitted: ${sm.lastSubmitted})`);
            }
        } else {
            console.log('  No sitemaps found yet (may take a moment to appear)');
        }
    } catch (err) {
        console.error('GSC API error:', err.message);
        if (err.code === 403) {
            console.error('\nMake sure the service account has been added as a user in GSC for drevcael.org');
        }
        process.exit(1);
    }
}

main();
