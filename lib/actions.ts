"use server";

import { createMeal } from "./meals";
import { redirect } from "next/navigation";
import { MealFormState } from "./Meal.type";
import { revalidatePath } from "next/cache";

function readText(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function shareMeal(
  _prevState: MealFormState,
  formData: FormData,
): Promise<MealFormState> {
  const title = readText(formData.get("title"));
  const summary = readText(formData.get("summary"));
  const instructions = readText(formData.get("instructions"));
  const creator = readText(formData.get("name"));
  const creatorEmail = readText(formData.get("email"));
  const image = formData.get("image");

  const errors: Record<string, string> = {};

  if (!creator) {
    errors.name = "Please enter your name.";
  }
  if (
    !creatorEmail ||
    !creatorEmail.includes("@") ||
    creatorEmail.length <= 3
  ) {
    errors.email = "Please enter a valid email.";
  }
  if (!title) {
    errors.title = "Please enter a title.";
  }
  if (!summary) {
    errors.summary = "Please enter a summary.";
  }
  if (!instructions) {
    errors.instructions = "Please enter instructions.";
  }
  if (!(image instanceof File) || image.size === 0) {
    errors.image = "Please choose an image.";
  }

  if (
    Object.keys(errors).length > 0 ||
    !title ||
    !summary ||
    !instructions ||
    !creator ||
    !creatorEmail ||
    !(image instanceof File)
  ) {
    return { message: "Missing required fields", errors };
  }

  await createMeal({
    title,
    slug: title.toLowerCase().replace(/ /g, "-"),
    image,
    summary,
    instructions,
    creator,
    creator_email: creatorEmail,
  });

  revalidatePath("/meals", "layout");

  redirect("/meals");
}
