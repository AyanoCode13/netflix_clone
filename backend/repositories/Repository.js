import mongoose from "mongoose";
export const getMoviesAndShowsCollection = ()=>{
    return mongoose.connection.db.collection("movies_and_shows");
}
export const getUsersCollection = ()=>{
    return mongoose.connection.db.collection("users")
}