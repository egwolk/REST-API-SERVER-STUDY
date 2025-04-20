import { Context, Hono } from "@hono/hono";
import { uniqueId } from "../services/uniqueId.ts";
import * as favsService from "../services/favs.service.ts"

function init(c:Context) {
    const id = c.req.header("X-MID") ?? uniqueId();
    const favs = favsService.getFavs(id);
    return c.json({ id, favs });
}

export const setupRoutes = (app: Hono) => {
    app.get("/init", init);
};