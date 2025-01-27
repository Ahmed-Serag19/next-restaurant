import Link from "next/link";
import React from "react";
import classes from "./page.module.css";

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <h1 className="text-white">Meals</h1>
      </main>
    </>
  );
};

export default MealsPage;
