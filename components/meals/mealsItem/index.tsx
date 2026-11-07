import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export interface Meal {
  id: number;
  title: string;
  image: string;
  slug: string;
  creator?: string;
  creator_email?: string;
  summary: string;
  instructions: string;
}

export default function MealsItem({
  id,
  title,
  image,
  creator,
  summary,
}: Meal) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
