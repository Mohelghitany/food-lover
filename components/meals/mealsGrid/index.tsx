import styles from "./index.module.css";
import MealsItem from "../mealsItem";
import { Meal as MealType } from "../mealsItem";

export default function MealsGrid({ meals }: { meals: MealType[] }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
