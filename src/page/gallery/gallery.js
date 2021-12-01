import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CardGallery from "../../components/card/card";
import { Container } from "@material-ui/core";
import img1 from "../../asset/img/europeana-5TK1F5VfdIk-unsplash.jpg";
import img2 from "../../asset/img/ian-dooley-iD5aVJFCXJg-unsplash.jpg";
import img3 from "../../asset/img/lucas-benjamin-wQLAGv4_OYs-unsplash.jpg";
import img4 from "../../asset/img/PHOTO-2021-05-20-19-33-42.jpg";
import img5 from "../../asset/img/victor-grabarczyk-wN9DU73b8_s-unsplash.jpg";
import img6 from "../../asset/img/PHOTO-2021-05-25-21-49-15.jpg";
import NavBar from "../../components/navbar/navbar";

const Gallery = () => {
  return (
    <div className="home-page">
      <nav className="nav">
        <NavBar />
      </nav>

      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <CardGallery img={img1} />
          <CardGallery img={img2} />
          <CardGallery img={img3} />
          <CardGallery img={img4} />
          <CardGallery img={img5} />
          <CardGallery img={img6} />
        </Box>
      </Container>
    </div>
  );
};

export default Gallery;
