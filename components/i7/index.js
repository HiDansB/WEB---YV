"use client";
import Image from "next/image";
import styles from "./index.module.css";

export default function I7() {
    return (
        <section className={styles.articlesSection}>
            <h2 className={styles.heading}>Let&apos;s look at the articles</h2>

            <div className={styles.mainContent}>
                <div className={styles.leftColumn}>
                    <article className={styles.mainArticle}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="https://lh3.googleusercontent.com/d/1C9WcL_xhzZ0jxQVPQLo_t52_1-Dz6FVz"
                                alt="Main article"
                                fill
                                style={{ objectFit: "cover", objectPosition: 'center' }}
                            />
                        </div>

                        <span className={styles.badge}>NEWS</span>
                        <h3 className={styles.title}>
                            2.5 million Vietnamese people are hearing impaired
                        </h3>
                        <p className={styles.description}>
                            2.5 million Vietnamese people are hearing impaired, of which 60%
                            are of working age, but the number of patients receiving hearing
                            aid intervention is still very low.
                        </p>
                        <a href="#" className={styles.readMore}>Read more</a>
                    </article>
                </div>

                {/* Cột bên phải: Danh sách bài viết tóm tắt */}
                <div className={styles.rightColumn}>
                    <article className={styles.sideArticle}>
                        <div className={styles.sideImageWrapper}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <Image
                                    src="https://lh3.googleusercontent.com/d/1CFwvAgzDRAK40OCgurdcHKICXGkBmf5v"
                                    alt="Article 1"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <span className={styles.badge2}>PRESS RELEASE</span>
                        </div>
                        <div style={{ flex: 1 }}>

                            <h4 className={styles.sideTitle}>Deaf people go to the hospital</h4>
                            <p className={styles.sideDesc}>
                                After waiting in line for nearly an hour to see a gynecologist, two deaf women took their turn to see the doctor, all three of them making chaotic hand gestures. The examination was over after a minute.
                            </p>
                        </div>
                    </article>

                    <article className={styles.sideArticle}>
                        <div className={styles.sideImageWrapper}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <Image
                                    src="https://lh3.googleusercontent.com/d/1X1Ag2raRWlOQykIBk26PmU9bGJlW1vh0"
                                    alt="Article 1"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <span className={styles.badge2}>NEWS</span>
                        </div>
                        <div style={{ flex: 1 }}>

                            <h4 className={styles.sideTitle}>Deaf people have difficulty going to the doctor</h4>
                            <p className={styles.sideDesc}>
                                Although he is 18 years old, Nguyen Duc Trong (Tan Phu district, Ho Chi Minh City) goes everywhere with ...                            </p>
                        </div>
                    </article>
                    <article className={styles.sideArticle}>
                        <div className={styles.sideImageWrapper}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <Image
                                    src="https://lh3.googleusercontent.com/d/1atYEoEyvl2FkSO6CbSKtFn6p9iE7y9Eu"
                                    alt="Article 1"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <span className={styles.badge2}>NEWS</span>
                        </div>
                        <div style={{ flex: 1 }}>

                            <h4 className={styles.sideTitle}>Sign Language Interpreter, the most selective profession</h4>
                            <p className={styles.sideDesc}>
                                There was a case where a deaf female patient went to the hospital for a pregnancy check-up, but the doctor did not understand and mistakenly thought that the patient wanted to have an abortion.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
