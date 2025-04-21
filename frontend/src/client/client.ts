import { hc } from "hono/client";
import { type ApiRoutes } from "server/app";

// Using RPC
export const client = hc<ApiRoutes>("/");
