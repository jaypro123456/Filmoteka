import React from "react";
import styles from "../NotFound/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page Not Found</p>
      <button className={styles.btn} onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
