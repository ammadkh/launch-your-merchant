import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import classes from "./dashboard.component.module.css";
import PricingComponent from "../components/pricing/Pricing.component";
import WorkComponent from "../components/work/work.component";
import ProductComponent from "../components/products/product.component";
import ReviewComponent from "../components/reviews/review.component";
import ProductionComponent from "../components/production/production.component";
import FaqComponent from "../components/FAQ/faq.component";
import MainComponent from "../components/Main/main.component";

export default function DashboardComponent() {
  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <MainComponent />
        <PricingComponent />
        <WorkComponent />
        <ProductComponent />
        <ReviewComponent />
        <ProductionComponent />
        <FaqComponent />
      </Grid>
    </Container>
  );
}
