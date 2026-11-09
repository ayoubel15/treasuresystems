/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_VIDEO_HERO?: string;
  readonly VITE_VIDEO_ABOUT?: string;
  readonly VITE_VIDEO_METRICS?: string;
  readonly VITE_VIDEO_SERVICES?: string;
  readonly VITE_VIDEO_FOOTER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
