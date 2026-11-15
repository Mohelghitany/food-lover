export type MealFormState = {
  message: string | null;
  errors: Record<string, string>;
};

export const initialMealFormState: MealFormState = {
  message: null,
  errors: {},
};
