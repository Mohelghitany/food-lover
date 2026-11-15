import sql from "better-sqlite3";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
export interface Meal {
  title: string;
  slug: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export type InputMeal = Omit<Meal, "image"> & {
  image: File;
};

export type OutputMeal = Omit<Meal, "image"> & {
  image: string;
  id?: number;
};

export async function getMeals(): Promise<OutputMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Test error");
  return db
    .prepare("SELECT * FROM meals")
    .all()
    .map((meal) => ({
      ...(meal as OutputMeal),
      title: xss((meal as OutputMeal).title),
      slug: xss((meal as OutputMeal).slug),
      image: xss((meal as OutputMeal).image),
      summary: xss((meal as OutputMeal).summary),
      instructions: xss((meal as OutputMeal).instructions),
      creator: xss((meal as OutputMeal).creator),
      creator_email: xss((meal as OutputMeal).creator_email),
    }));
}

export function getMeal(slug: string): OutputMeal | undefined {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as
    | OutputMeal
    | undefined;
}

export async function createMeal(
  meal: InputMeal,
): Promise<OutputMeal & { id: number }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  db.prepare("DELETE FROM meals WHERE image = 'images/'").run();

  const extension = meal.image.name.split(".").pop();
  const imageUrl = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${imageUrl}`);
  const buffer = await meal.image.arrayBuffer();
  stream.write(Buffer.from(buffer), (error) => {
    if (error) {
      throw new Error(`Failed to write image to file: ${error.message}`);
    }
  });

  const imagePath = `/images/${imageUrl}`;
  const saved: OutputMeal = {
    title: xss(meal.title),
    slug: xss(slugify(meal.title)),
    summary: xss(meal.summary),
    instructions: xss(meal.instructions),
    creator: xss(meal.creator),
    creator_email: xss(meal.creator_email),
    image: imagePath,
  };

  const result = db
    .prepare(
      "INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)",
    )
    .run(
      saved.title,
      saved.slug,
      saved.image,
      saved.summary,
      saved.instructions,
      saved.creator,
      saved.creator_email,
    );

  return { ...saved, id: Number(result.lastInsertRowid) };
}
