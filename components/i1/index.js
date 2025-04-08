"use client";

import Image from "next/image";
import styles from "./index.module.css";

export default function I1() {
    return (
        <main className={styles.main}>
            <section className={styles.headerSection}>
                <div className={styles.developmentOrg}>
                    <h3 style={{ fontWeight: 400, fontSize: 28, color: '#696984' }}>Development organization</h3>
                    <div className={styles.logoContainer}>
                        <Image
                            src="https://lh3.googleusercontent.com/d/14KjtqZxowJqAVm58Iqk8IQTAQU39GctR"
                            alt="Logo Đại Học Lạc Hồng"
                            width={150}
                            height={60}
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
                    {/* Icon dạng vòng tròn */}
                    <div className={styles.iconCircle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={24} width={24} fill="white">
                            <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                        </svg>
                    </div>
                    <h3>Convert text and audio into animation</h3>
                    <p>Đây là chức năng khi mà bạn... thêm nội dung vào đây</p>
                </div>
                {/* Khối 2 */}
                <div className={styles.featureBox}>
                    <div className={styles.iconCircleOrange}>
                        {/* Thay icon phù hợp */}
                        <Image
                            src="/images/icon2.png"
                            alt="Icon feature 2"
                            width={30}
                            height={30}
                        />
                    </div>
                    <h3>Chuyển đổi từ video thành văn bản</h3>
                    <p>Đây là chức năng khi mà bạn... thêm nội dung vào đây</p>
                </div>
                {/* Khối 3 */}
                <div className={styles.featureBox}>
                    <div className={styles.iconCircleBlue}>
                        {/* Thay icon phù hợp */}
                        <Image
                            src="/images/icon3.png"
                            alt="Icon feature 3"
                            width={30}
                            height={30}
                        />
                    </div>
                    <h3>Cộng đồng hỗ trợ cho nhóm người khuyết tật</h3>
                    <p>Đây là chức năng khi mà bạn... thêm nội dung vào đây</p>
                </div>
            </section>
        </main>
    );
}
