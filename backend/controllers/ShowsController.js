export const getById = async (req, res) =>{
    console.log(req.query._id)
    res.status(200).json("Single Show")
}
export const addToWatchlist = async (req, res) =>{
    console.log(req.body)
    res.status(200).json("Add to Watchlist")
}
export const removeFromWatchlist = async (req, res) =>{
    console.log(req.query._id)
    res.status(200).json("Removed from watchlist")
}
export const getShows = async (req, res) =>{
    const { getMoviesAndShowsCollection } = await import("../repositories/Repository.js")
    console.log(req.query)
    const shows = await getMoviesAndShowsCollection().find({
        "genre": {$regex: req.query.genre.slice(0,4), $options: 'i'}
    }).limit(5).skip(Number(req.query.skip)).toArray()
    res.status(200).json(shows)
}
