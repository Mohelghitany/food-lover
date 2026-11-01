import Link from "next/link";
import styles from "./index.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { Suspense } from "react";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, Created{" "}
          <span className={styles.highlight}>by You</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It&apos;s easy and
          fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
