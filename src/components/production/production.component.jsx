import React from "react";
import Grid from "@mui/material/Grid";
import firstPerson from "../../assets/dav1aa.png";
import secondPerson from "../../assets/dav2.png";
import thirdPerson from "../../assets/lady1.png";
import classes from "./production.module.css";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Fulfillment",
    content:
      "Quality and sustainability is our top priority. That's why we use direct-to-garment or DTG to print directly onto the product which is then absorbed into the fabric. Your customers get only the best.",
    imgUrl: firstPerson,
  },
  {
    id: 2,
    title: "3 Quality checks",
    content:
      "Every order then goes through a 3 step quality check. This includes AI software to check alignment, fulfillment specialists to check quality, and a final inspection before shipment.",
    imgUrl: secondPerson,
  },
  {
    id: 1,
    title: "Shipping",
    content:
      "After fulfillment and quality checks, orders automatically go to nearest fulfillment center where they are shipped out in 3-5 business days. Order ships out worldwide",
    imgUrl: thirdPerson,
  },
];

export default function ProductionComponent() {
  return (
    <Grid item xs={12} className={classes.wrapper}>
      <span className={classes.title}>Quality & Production</span>
      <p className={classes.desc}>
        When you get a order, we take care of everything for you!
      </p>
      <div className={classes.container}>
        {data.map((person) => (
          <div key={person.id} className={classes.box}>
            <h3>{person.title}</h3>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1, type: "spring" }}
              className={classes.imgWrapper}
            >
              <img
                src={person.imgUrl}
                alt=""
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
            <p className={classes.content}>{person.content}</p>
          </div>
        ))}
      </div>
    </Grid>
  );
}
