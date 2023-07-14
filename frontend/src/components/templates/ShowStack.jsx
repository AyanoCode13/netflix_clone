import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";
import ReactPlayer from "react-player";

export default function ShowStack({ shows }) {
  console.log(shows);
 
  return (
    <div className="Show">
      <Stack
        sx={{ width: "100%", height: 300 }}
        direction={"row"}
        justifyItems={"center"}
        spacing={1}
      >
        {shows.map((show) => {
          return (
            <Card key={show._id} sx={{ width: "100%", height: "100%" }}>
              <CardHeader title={show.title} />
              <CardContent>
                <ReactPlayer
                
                  width={"100%"}
                  height={"100%"}
                />
              </CardContent>
              <CardActions></CardActions>
              
            </Card>
          );
        })}
      </Stack>
    </div>
  );
}
