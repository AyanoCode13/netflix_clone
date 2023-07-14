import express from 'express';

const showRoutes = express.Router();


showRoutes.get("/", async (req, res) => {
    const { getShows} = await import ("../../controllers/ShowsController.js")
    await getShows(req, res)
})
showRoutes.put("/", async (req, res) => {
    const { addToWatchlist } = await import ("../../controllers/ShowsController.js")
    await addToWatchlist(req, res)
})
showRoutes.delete("/", async (req, res) => {
    const { removeFromWatchlist } = await import ("../../controllers/ShowsController.js")
    await removeFromWatchlist(req, res)
})
export default showRoutes;