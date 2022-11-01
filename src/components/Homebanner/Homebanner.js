import React from "react";
import styles from "./Homebanner.module.css";
import Image from "next/image";

function Homebanner() {
    return (
        <div className={styles.pic}>
            <div className={styles.skylineWrapper}>
                <Image
                    className={styles.skyline}
                    src={"/skyline.png"}
                    alt="skyline"
                    layout={"responsive"}
                    width={"3840px"}
                    height={"1366px"}
                />
            </div>
            <header>
                <p className={styles.title}>Limestone Capital</p>
                <p className={styles.subtitle}>
                    Canada’s leading value-oriented investment club. Founded in 2011 at Queen’s
                    University.
                </p>
            </header>
            <svg className={styles.arrows}>
                <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
                <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
                <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
    );
}

export default Homebanner;
