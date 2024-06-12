/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "virtual:icons/*" {
  import type { SVGProps } from "react";
  import type React from "react";
  const component: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  export default component;
}
