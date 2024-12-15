import React from "react";
import styles from "./Reda.module.css";
import Link from "next/link";
function Reda() {
  return (
    <section className={styles.main_Section}>
        <div className={styles.container}>

      <h1>Agents. Tours. Loans. Homes.</h1>
      <Link href="/">Expolre More</Link>
        </div>
    </section>
  );
}

export default Reda;
