"use client";
import Image from "next/image";
import styles from "./index.module.css";

export default function I2() {
    return (
        <section className={styles.coursesSection}>
            <h2 className={styles.title}>Courses with solution pages</h2>
            <p className={styles.subtitle}>
                Our solution not only solves communication problems but also creates
                sign language courses by groups of experts in this field.
            </p>

            <div className={styles.coursesGrid}>
                {/* Basic Course Card */}
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="https://lh3.googleusercontent.com/d/1hZZu1OnxN1XamYfv5vEP2-R75cdF2CGG"
                            alt="Basic course"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className={styles.overlay}>
                        <h3 className={styles.courseTitle}>Basic course</h3>
                        <button className={styles.learnButton}>Learn now</button>
                    </div>
                </div>

                {/* Advanced Course Card */}
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="https://lh3.googleusercontent.com/d/1wIH0VoNWjZjprXb3Wjgt66JQdANQqr4G"
                            alt="Advanced course"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className={styles.overlay}>
                        <h3 className={styles.courseTitle}>Advanced Course</h3>
                        <button className={styles.learnButton}>Learn now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
