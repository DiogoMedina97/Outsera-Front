/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_PORT: number;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
