import classes from "./index.module.css";
import ImagePicker from "@/components/images/image-picker";

export default function ShareMealP() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const meal = {
      title: String(formData.get("title") ?? ""),
      slug: String(formData.get("title") ?? ""),
      image: formData.get("image") as File,
      summary: formData.get("summary") as string,
      instructions: formData.get("instructions") as string,
      creator: formData.get("name") as string,
      creator_email: formData.get("email") as string,
    };
    console.log(meal);
  };
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={handleSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="Image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
