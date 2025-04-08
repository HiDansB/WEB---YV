"use client";
import Image from "next/image";
import styles from "./index.module.css";

export default function I0() {
    return (
        <main className={styles.heroSection}>
            <nav className={styles.navbar}>
                <div className={styles.logo}></div>
                <ul className={styles.navLinks}>
                    <li>Home</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Us</li>
                </ul>
                <div className={styles.navButtons}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.signupBtn}>Sign Up</button>
                </div>
            </nav>

            {/* Hero content */}
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1 className={styles.mainHeading}>
                        <span>Your Voice</span> Application sign language translation
                    </h1>
                    <p className={styles.subText}>
                        No limits in communication, endless possibilities in life.
                    </p>

                    <div className={styles.buttonGroup}>
                        <button className={styles.discoverBtn}>Discover</button>
                        <button className={styles.playBtn}>
                            <span className={styles.playIcon}>▶</span>
                        </button>
                    </div>
                </div>

                {/* Điện thoại + icon */}
                <div className={styles.rightSide}>
                    {/* Mockup điện thoại trái */}
                    <div className={styles.phoneWrapper}>
                        <Image
                            src="https://lh3.googleusercontent.com/d/1cMQfa1_nKZtmF89jp8aPYLusxfhV-7Pi"
                            alt="Phone left"
                            fill
                            className={styles.phoneImage}
                        />
                    </div>
                    <div className={styles.infoBox} >
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image
                                src="https://lh3.googleusercontent.com/d/1n9V8VqSqd5Z_bNuUpxiF5_k9HrbaDhRH"
                                alt="User icon"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
