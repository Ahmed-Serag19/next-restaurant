import Link from "next/link";
import React from "react";

const MealsPage = () => {
  return (
    <main>
      <h1 className="text-white">Meals</h1>
      <Link href="/meals/share">Share</Link>
    </main>
  );
};

export default MealsPage;
