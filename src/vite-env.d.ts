/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_PORT: number;
  readonly VITE_API_URL: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
