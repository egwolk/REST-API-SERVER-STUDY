import { Hono } from "@hono/hono";
import { setupRoutes } from "./routes/setup.routes.ts";
import { movieRoutes } from "./routes/movie.routes.ts";
const app = new Hono();

setupRoutes(app);
movieRoutes(app);

Deno.serve(app.fetch);
