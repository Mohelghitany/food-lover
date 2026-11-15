"use client";

import classes from "./index.module.css";
import ImagePicker from "@/components/images/image-picker";
import MealsSubmission from "@/components/meals/mealsSubmission";
import { useActionState } from "react";
import { shareMeal } from "@/lib/actions";
import { initialMealFormState } from "@/lib/Meal.type";

export default function ShareMealP() {
  const [state, formAction, isPending] = useActionState(
    shareMeal,
    initialMealFormState,
  );

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
              {state.errors.name ? (
                <span className={classes.error}>{state.errors.name}</span>
              ) : null}
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
              {state.errors.email ? (
                <span className={classes.error}>{state.errors.email}</span>
              ) : null}
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            {state.errors.title ? (
              <span className={classes.error}>{state.errors.title}</span>
            ) : null}
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
            {state.errors.summary ? (
              <span className={classes.error}>{state.errors.summary}</span>
            ) : null}
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
            ></textarea>
            {state.errors.instructions ? (
              <span className={classes.error}>{state.errors.instructions}</span>
            ) : null}
          </p>
          <ImagePicker name="image" label="Image" />
          {state.errors.image ? (
            <span className={classes.error}>{state.errors.image}</span>
          ) : null}
          {state.message ? (
            <p className={classes.error}>{state.message}</p>
          ) : null}
          <p className={classes.actions}>
            <MealsSubmission isPending={isPending} />
          </p>
        </form>
      </main>
    </>
  );
}
