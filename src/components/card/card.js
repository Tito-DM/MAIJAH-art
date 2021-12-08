import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./card.css"

export default function CardGallery({ img }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        marginBottom: "30px",
        backgroundColor: "rgb(24, 24, 24)",
        color: "white !important",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Willian Nazare"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="400" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      {/**  Icon add later
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      */}
    </Card>
  );
}
