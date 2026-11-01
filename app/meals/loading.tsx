import styles from "./index.module.css";

export default function MealsLoading() {
  return (
    <div className={styles.loading}>
      <p>Loading meals...</p>
    </div>
  );
}
