import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import shirt from "../../assets/1shirt.PNG";
import hoodie from "../../assets/2hoodie.PNG";
import longSleeveShirt from "../../assets/3longsleeve.PNG";
import mobileCase from "../../assets/4case.PNG";
import mug from "../../assets/5mug.PNG";
import banner from "../../assets/6poster1.PNG";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import classes from "./product.module.css";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Unisex Premium Cotton tee",
    imgUrl: shirt,
    price: 28,
    profit: 12,
  },
  {
    id: 2,
    title: "Heavy Premium Cotton hoodie",
    imgUrl: hoodie,
    price: 48,
    profit: 15,
  },
  {
    id: 3,
    title: "long Sleeve shirt",
    imgUrl: longSleeveShirt,
    price: 10,
    profit: 3,
  },
  {
    id: 4,
    title: "Mobile Case",
    imgUrl: mobileCase,
    price: 5,
    profit: 1,
  },
  {
    id: 5,
    title: "Mug",
    imgUrl: mug,
    price: 7,
    profit: 3,
  },
  {
    id: 6,
    title: "Poster",
    imgUrl: banner,
    price: 12,
    profit: 6,
  },
];

export default function ProductComponent() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <Grid item xs={12} className={classes.container}>
      <span className={classes.title}>High Quality Products</span>
      <div className={classes.wrapper}>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} style={{ textAlign: "start" }}>
            <h1 style={{ color: "white" }}>
              <i>QUALITY MADE EASY</i>
            </h1>
            <p
              style={{
                color: "white",
                maxWidth: "450px",
                letterSpacing: "0.5px",
              }}
            >
              Choose from high quality products you can design and start selling
              right away. We'll handle the headache of end-to-end logistics so
              that you can focus on the fun stuff
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{ textAlign: "center", marginTop: "3em" }}
          >
            <p
              style={{
                color: "white",
              }}
            >
              {data[selectedItem].title}
            </p>
            <motion.img
              key={selectedItem}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
              width="200px"
              height="200px"
              src={data[selectedItem].imgUrl}
              alt=""
            ></motion.img>
            <p
              style={{
                color: "white",
              }}
            >
              ${data[selectedItem].price.toFixed(2)}
            </p>
            <p
              style={{
                color: "white",
              }}
            >
              your profit{" "}
              <span style={{ color: "lightgreen" }}>
                ${data[selectedItem].profit.toFixed(2)}
              </span>
            </p>
            <div className={classes.arrowLeft}>
              <ChevronLeftIcon
                className={classes.iconSize}
                onClick={() => {
                  console.log("click");
                  if (!selectedItem) {
                    setSelectedItem(data.length - 1);
                    return;
                  }
                  setSelectedItem((prev) => prev - 1);
                }}
              />
            </div>
            <div className={classes.arrowRight}>
              <ChevronRightIcon
                className={classes.iconSize}
                onClick={() => {
                  if (selectedItem === data.length - 1) {
                    setSelectedItem(0);
                    return;
                  }
                  setSelectedItem((prev) => prev + 1);
                }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
