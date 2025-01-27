import React from "react";
import classes from "./page.module.css";

const MealDetailPage = ({ params }) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image />
        </div>
      </header>
      <main></main>
    </>
  );
};

export default MealDetailPage;
