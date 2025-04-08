"use client";
import Image from "next/image";
import styles from "./index.module.css";

export default function I6() {
    return (
        <div className={styles.solutionSection}>
            <div className={styles.downloadSection}>
                <div style={{ display: 'flex' }}>

                    <div className={styles.downloadWrapper} style={{ flex: 1 }}>
                        <div className={styles.subheader}>
                            <hr className={styles.line} />
                            <span className={styles.focusText}>Our team</span>
                        </div>

                        {/* Tiêu đề lớn */}
                        <h2 className={styles.mainHeading}>
                            Development team
                        </h2>

                        {/* Đoạn mô tả */}
                        <p className={styles.description}>
                            Every gesture, every sign is now heard and understood. We believe that everyone deserves to express their emotions, and technology will be the voice that touches the heart.
                        </p>

                        {/* Nút learn more */}
                        <button className={styles.learnMoreBtn}>Contact us </button>
                    </div>
                    <div className={styles.phoneMockup} style={{
                        flex: 1.3, display: 'flex', justifyContent: 'end', alignItems: 'center',
                        position: 'relative'
                    }} >
                        <div style={{ position: 'relative', aspectRatio: '3/2', width: '90% ' }}>
                            <Image
                                src="https://lh3.googleusercontent.com/d/1b1PJHPw0ebdwWlgi30x4_TQSj7j5oSxd"
                                alt="Your Voice Application"
                                fill
                                className={styles.mockupPhoneImage}
                            />
                        </div>
                        <section className={styles.container}>
                            <div className={styles.quoteCard}>
                                {/* Thanh màu dọc bên trái (có thể tạo bằng border hoặc pseudo-element) */}
                                <div className={styles.leftBar}></div>

                                {/* Nội dung quote */}
                                <div className={styles.content}>
                                    <p className={styles.quote}>
                                        &quot;We can&apos;t help everyone, but each of us can help someone.&quot;
                                    </p>
                                    <div className={styles.footer}>
                                        <span className={styles.author}>– Ronald Reagan –</span>
                                        <div className={styles.stars}>
                                            {/* Có thể dùng icon <Image>, SVG hoặc Font Awesome thay cho ⭐ */}
                                            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
