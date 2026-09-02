// In dev, Vite proxies /api to the local Express server (see vite.config.js).
// In production, set VITE_API_URL to your deployed server's URL (e.g. on
// Render) as an environment variable in your hosting provider (Vercel/Netlify).
export const API_URL = import.meta.env.VITE_API_URL || "";
export const CONTACT_ENDPOINT = `${API_URL}/api/contact`;
