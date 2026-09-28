import { Router, type IRouter } from "express";

const router: IRouter = Router();

const services = [
  {
    slug: "free-fire",
    name: "Free Fire Profile",
    category: "Gaming",
    description: "Lookup profil dan statistik pemain Free Fire.",
    path: "/api/freefire/profile",
    method: "GET",
    status: "ready",
  },
  {
    slug: "tiktok-downloader",
    name: "TikTok Downloader",
    category: "Downloader",
    description: "Ambil metadata video TikTok dari URL publik.",
    path: "/api/downloader/tiktok",
    method: "GET",
    status: "ready",
  },
  {
    slug: "youtube-downloader",
    name: "YouTube Downloader",
    category: "Downloader",
    description: "Request metadata media YouTube dari URL publik.",
    path: "/api/downloader/youtube",
    method: "GET",
    status: "ready",
  },
  {
    slug: "image-to-url",
    name: "Image to URL",
    category: "Utilities",
    description: "Upload image dan dapatkan URL publik.",
    path: "/api/upload/image",
    method: "POST",
    status: "ready",
  },
  {
    slug: "qr-code",
    name: "QR Code Generator",
    category: "Utilities",
    description: "Buat QR code dari teks atau URL.",
    path: "/api/tools/qr",
    method: "GET",
    status: "ready",
  },
  {
    slug: "text-tools",
    name: "Text Utilities",
    category: "Utilities",
    description: "Encode, decode, dan format text dengan cepat.",
    path: "/api/tools/text",
    method: "GET",
    status: "ready",
  },
] as const;

router.get("/catalog", (_req, res) => {
  res.json({
    name: "Gixssapi",
    version: "1.0.0",
    owner: "Gixss",
    contact: "6282322985264",
    baseUrl: "/api",
    services,
  });
});

router.get("/status", (_req, res) => {
  res.json({
    status: "operational",
    updatedAt: new Date().toISOString(),
    services: services.map(({ slug, name, status }) => ({
      slug,
      name,
      status,
      latencyMs: null,
    })),
  });
});

export default router;