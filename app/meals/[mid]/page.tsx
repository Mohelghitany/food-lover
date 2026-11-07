import { Suspense } from "react";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import styles from "./index.module.css";
import { notFound } from "next/navigation";

type MealDetailsProps = {
  params: Promise<{ mid: string }>;
};

export default function Page({ params }: MealDetailsProps) {
  return (
    <Suspense
      fallback={<p className={styles.loading}>Loading meal details...</p>}
    >
      <MealDetails params={params} />
    </Suspense>
  );
}

async function MealDetails({ params }: MealDetailsProps) {
  const { mid } = await params;

  const meal = await getMeal(mid);
  if (!meal) {
    notFound();
  }
  const instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={styles.instructions}>
        <p
          className={styles.instructionsText}
          dangerouslySetInnerHTML={{ __html: instructions }}
        />
      </main>
    </>
  );
}
