import { useLoaderData } from "react-router";
import Slider from "../templates/Slider";
import { Await } from "react-router-dom";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";



export default function Home() {
  const shows = useLoaderData();
  const genres = (Object.keys(shows))

 

  while(!shows){
    return <CircularProgress/>
  }
  
  return (
    <div className="Home">
     {genres.map(genre=>{
      return (
        <div key={genre}>
          <Slider items={shows[genre]} genre={genre}/>
        </div>
      )
     })}
    </div>
  );
}3
