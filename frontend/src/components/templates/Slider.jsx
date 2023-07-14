import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Carousel from "react-material-ui-carousel";
import SquareIcon from "@mui/icons-material/Square";
import ShowStack from "./ShowStack";
import { useState } from "react";

export default function Slider({ items, genre}) {
  const [index, setIndex] = useState(0)
  const [shows, setShows] = useState(items)

  const getNext = async (index) => {
    console.log(genre)
    console.log(index)
    const { getNextShows } = await import("../../api/showFunctions")
    const result = await getNextShows(genre, index)
    setShows(result)
  }
  return (
    <Carousel
      sx={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "20px"}}
      strictIndexing={false}
      animation="slide"
      cycleNavigation={true}
      fullHeightHover={true}
      autoPlay={false}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosNewIcon />}
      IndicatorIcon={<SquareIcon />}
      indicatorIconButtonProps={{
        style: {
          padding: "10w",
        },
      }}
      next={async () => {
        
        setIndex(oldIndex=>oldIndex+1)
        console.log(index)
        await getNext(5*index)

      }}
      prev={() => {}}
    >
    <ShowStack shows={shows}/>
      
    </Carousel>
  );
}
