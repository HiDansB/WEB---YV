"use client";

import Image from "next/image";
import styles from "./index.module.css";

export default function I1() {
    return (
        <main className={styles.main}>
            <section className={styles.headerSection}>
                <div className={styles.developmentOrg}>
                    <h3 style={{ fontWeight: 400, fontSize: 18, color: '#696984' }}>Development organization</h3>
                    <div className={styles.logoContainer}>
                        <Image
                            src="https://lh3.googleusercontent.com/d/14KjtqZxowJqAVm58Iqk8IQTAQU39GctR"
                            alt="Logo Đại Học Lạc Hồng"
                            width={250}
                            height={120}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.mainFunctions}>
                <h2>
                    Main functions of <span className={styles.highlight}>Your Voice.</span>
                </h2>
                <p className={styles.subTitle}>
                    APPLICATION FOCUSED ON SOLVING THE DEAF AND HEARING IMPAIRED GROUP
                </p>
            </section>

            {/* Phần 3 khối chức năng */}
            <section className={styles.featuresContainer}>
                {/* Khối 1 */}
                <div className={styles.featureBox}>
                    <div className={styles.iconCircle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={24} width={24} fill="white">
                            <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                        </svg>
                    </div>
                    <h3>Convert text and audio into animation</h3>
                    <p>This is the function when you... add content here</p>
                </div>
                {/* Khối 2 */}
                <div className={styles.featureBox}>
                    <div className={styles.iconCircleOrange}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={24} width={24} fill="white">
                            <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
                        </svg>
                    </div>
                    <h3 >Convert from video to<br /> text</h3>
                    <p>This is the function when you... add content here</p>
                </div>
                {/* Khối 3 */}
                <div className={styles.featureBox}>
                    <div className={styles.iconCircleBlue}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height={28} width={28} fill="white">
                            <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
                        </svg>
                    </div>
                    <h3>Community Support for People with Disabilities</h3>
                    <p>This is the function when you... add content here</p>
                </div>
            </section>
        </main>
    );
}
