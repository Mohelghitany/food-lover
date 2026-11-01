import sql from "better-sqlite3";

const db = sql("meals.db");

export interface Meal {
  id: string;
  title: string;
  image: string;
  creator: string;
  summary: string;
}

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM meals").all() as Meal[];
}

export function getMeal(id: string) {
  return db.prepare("SELECT * FROM meals WHERE id = ?").get(id);
}
