import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from '@docusaurus/Link';



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        <div className="col col --4">
          <div className={styles.card}>
          <h3>INEC</h3>
          <p className="text">
           Find out more about INEC  
            </p>
            <Link href="https://main.inecnigeria.org/">View More</Link>
            </div>
           
          </div>
           
          <div className="col col --4">
            <div className={styles.card}>
              <h3>About INEC </h3>
           <p className="text">Read more about the Elections</p>
           <Link href="https://main.inecnigeria.org/?page_id=2196">View More</Link>
            </div>
          </div>
          <div className="col col --4">
            <div className={styles.card}>
            <h3>INEC Elections</h3>
            <p className="text"> Read more about the Elections</p>
            <Link href="https://main.inecnigeria.org/?page_id=13">View More</Link>
              </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
