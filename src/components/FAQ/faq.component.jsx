import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./faq.component.module.css";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Why should I use Merspals?",
    answer:
      "Because being a creator is anything but easy. Not only you have to keep creating amazing content and engaging with your community, but you are also responsible for figuring out how you'll make money. Mercpals makes it super easy for creators to get an online merch store. We will handle all the logistics, so you can focus on the fun stuff.",
  },
  {
    id: 2,
    question: "How much money do I make on each scale?",
    answer:
      "You can see how much profit you make the above section. You can also raise your prices to earn more.",
  },
  {
    id: 3,
    question: "How do I get a merch store for free?",
    answer:
      "It's easy with Merchpals. Just click create and design your merch. We build your online store!",
  },
  {
    id: 4,
    question: "Do I need to sign a contract?",
    answer: "Nope. You are free to use Merchpals and start earning right away.",
  },
];

export default function FaqComponent() {
  const [expandedItem, setExpandedItem] = useState(0);
  return (
    <Grid
      item
      xs={12}
      style={{
        textAlign: "center",
        marginTop: "3em",
        justifyContent: "center",
      }}
    >
      <span className={classes.title}>Frequently Asked Questions</span>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1, type: "spring" }}
        style={{
          width: "60%",
          margin: "auto",
          flexDirection: "column",
          marginTop: "4rem",
        }}
      >
        {faqs.map((faq) => {
          return (
            <Accordion
              style={{
                border: "none",
                boxShadow: "none",
                fontWeight: "12px",
              }}
              expanded={faq.id === expandedItem}
              onChange={() =>
                setExpandedItem((prev) => (prev === faq.id ? 0 : faq.id))
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "100%", textAlign: "start" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ textAlign: "start" }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </motion.div>
    </Grid>
  );
}
