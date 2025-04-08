"use client";
import Image from "next/image";
import styles from "./index.module.css";

export default function I5() {
    return (
        <div className={styles.solutionSection}>
            <div className={styles.downloadSection}>
                <div style={{ display: 'flex' }}>
                    <div className={styles.phoneMockup} style={{ flex: 1.3, display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
                        <div style={{ position: 'relative', aspectRatio: '3/2.5', width: '90% ' }}>
                            <Image
                                src="https://lh3.googleusercontent.com/d/1CxDHyZPu06DEFGiTWxBvbgMtolihhiVG"
                                alt="Your Voice Application"
                                fill
                                className={styles.mockupPhoneImage}
                            />
                        </div>
                    </div>
                    <div className={styles.downloadWrapper} style={{ flex: 1 }}>
                        <div className={styles.subheader}>
                            <hr className={styles.line} />
                            <span className={styles.focusText}>Focus on user experience</span>
                        </div>

                        {/* Tiêu đề lớn */}
                        <h2 className={styles.mainHeading}>
                            We always aim for things that are <br />
                            convenient and powerful.
                        </h2>

                        {/* Đoạn mô tả */}
                        <p className={styles.description}>
                            We use OneDrive and Google Drive for data storage, MongoDB for database
                            management, Flutter for cross-platform app development, and MediaPipe
                            for image processing and AI-based recognition.
                        </p>

                        {/* Nút learn more */}
                        <button className={styles.learnMoreBtn}>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
