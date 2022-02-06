declare namespace NodeJS {
  interface ProcessEnv {
    readonly MIX_AUTH0_DOMAIN: string;
    readonly MIX_AUTH0_CLIENT_ID: string;
  }
}
