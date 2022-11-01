import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import firstReview from "../../assets/1vasPage5.png";
import beau from "../../assets/2beaupage.png";
import dos from "../../assets/3dos.png";
import classes from "./review.component.module.css";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Vasily Philips",
    review:
      "Merchpals makes everything so easy! my community loves the merch and I'm selling way more. They handle all the orders and the product quality is perfect.",
    imgUrl: firstReview,
  },
  {
    id: 2,
    name: "Beau Spangler",
    review:
      "Making a merch store was so easy. It's been a great experience and they help with everything!",
    imgUrl: beau,
  },
  {
    id: 3,
    name: "Dosice",
    review: "They were really helpful. I would recommand them to everyone.",
    imgUrl: dos,
  },
];

export default function ReviewComponent() {
  const [selected, setSelected] = useState(1);
  const selectedReview = reviews.find((review) => review.id === selected);
  return (
    <Grid item xs={12} className={classes.wrapper}>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        className={classes.grid}
      >
        <Grid item xs={12} md={6} style={{ textAlign: "start" }}>
          <div className={classes.customerImgContainer}>
            <motion.img
              key={selectedReview.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
              src={selectedReview.imgUrl}
              alt=""
              width="100%"
              className={classes.customerImg}
            ></motion.img>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.leftSide}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "3rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {reviews.map((review) => {
              return (
                <p
                  key={review.id}
                  style={{
                    cursor: "pointer",
                    borderBottom:
                      selected === review.id ? "2px solid black" : "none",
                    paddingBottom: "1rem",
                  }}
                  onClick={() => {
                    setSelected(review.id);
                  }}
                >
                  {review.name}
                </p>
              );
            })}
          </div>
          <div style={{ marginTop: "5rem" }}>
            <motion.p
              key={selectedReview.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              {selectedReview.review}
            </motion.p>
          </div>
          <a href="/">View Store</a>
        </Grid>
      </Grid>
    </Grid>
  );
}
