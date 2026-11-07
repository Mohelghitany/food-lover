import sql from "better-sqlite3";
import xss from "xss";

const db = sql("meals.db");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
export interface Meal {
  id?: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Test error");
  return db
    .prepare("SELECT * FROM meals")
    .all()
    .map((meal) => ({
      ...(meal as Meal),
      title: xss((meal as Meal).title),
      slug: xss((meal as Meal).slug),
      image: xss((meal as Meal).image),
      summary: xss((meal as Meal).summary),
      instructions: xss((meal as Meal).instructions),
      creator: xss((meal as Meal).creator),
      creator_email: xss((meal as Meal).creator_email),
    }));
}

export function getMeal(id: string) {
  const meal = db.prepare("SELECT * FROM meals WHERE id = ?").get(id) as
    | Meal
    | undefined;
  if (!meal) {
    return undefined;
  }
  return {
    ...(meal as Meal),
    title: xss(meal.title),
    slug: xss(meal.slug),
    image: xss(meal.image),
    summary: xss(meal.summary),
    instructions: xss(meal.instructions),
    creator: xss(meal.creator),
    creator_email: xss(meal.creator_email),
  };
}

export async function createMeal(meal: Meal) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  db.prepare("DELETE FROM meals WHERE image = '[object File]'").run();
  return db
    .prepare(
      "INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)",
    )
    .run(
      xss(meal.title),
      xss(slugify(meal.title)),
      xss(meal.image),
      xss(meal.summary),
      xss(meal.instructions),
      xss(meal.creator),
      xss(meal.creator_email),
    );
}
