import { Context, Hono } from "@hono/hono";
import * as movieService from "../services/movie.service.ts";
import * as favsService from "../services/favs.service.ts";

async function search(c:Context) {
    const key = c.req.query("key") ?? "";
    const movies = await movieService.searchMovie(key);
    return c.json(movies)
}
function getDetails(c:Context) {
}
function addMovieToFavs(c:Context) {
}
function removeMovieFromFavs(c:Context) {
}


export const movieRoutes = (app: Hono): void => {
    app.get("/movies/search", search);
    app.get("/movies/:id", getDetails);
    app.post("/movies/:id/favs", addMovieToFavs);
    app.delete("/movies/:id/favs", removeMovieFromFavs);
};
