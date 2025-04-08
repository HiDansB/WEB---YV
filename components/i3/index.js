"use client";
import Image from "next/image";
import styles from "./index.module.css";

export default function I3() {
    return (
        <section className={styles.demoSection}>
            {/* Cột bên trái: tiêu đề + các chức năng */}
            <div className={styles.leftColumn}>
                <h2 className={styles.title}>DEMO Recognition Function<br />Representative Letters</h2>
                <div className={styles.featureItem}>
                    <div className={styles.icon} style={{ backgroundColor: "#F1B01D" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={24} width={24} fill="white">
                            <path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z" />
                        </svg>
                    </div>
                    <div className={styles.featureText}>
                        <h4>Translate from text to animation</h4>
                        <p>
                            As you enter text, the system will automatically translate it
                            into sign language using animation.
                        </p>
                    </div>
                </div>

                <div className={styles.featureItem}>
                    <div className={styles.icon} style={{ backgroundColor: "#FF7B69" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={24} width={24} fill="white">
                            <path d="M96 96l0 160c0 53 43 96 96 96s96-43 96-96l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c0-53-43-96-96-96S96 43 96 96zM320 240l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24z" />
                        </svg>
                    </div>
                    <div className={styles.featureText}>
                        <h4>Audio to animation translation</h4>
                        <p>
                            When you use this function, the sound will be converted into animation.
                        </p>
                    </div>
                </div>

                <div className={styles.featureItem}>
                    <div className={styles.icon} style={{ backgroundColor: "#257FAB" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={22} width={22} fill="white">
                            <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM160 128l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L192 96c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0z" />
                        </svg>
                    </div>
                    <div className={styles.featureText}>
                        <h4>Translate from live video to text</h4>
                        <p>
                            You just need to record a video of someone using sign language
                            and the system will automatically translate for you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cột bên phải: khung demo video / hình ảnh */}
            <div className={styles.rightColumn}>
                <div className={styles.demoWrapper}>
                    {/* Thay ảnh demo-hand.jpg bằng ảnh/video của bạn */}
                    <Image
                        src="https://lh3.googleusercontent.com/d/1hZZu1OnxN1XamYfv5vEP2-R75cdF2CGG"
                        alt="Hand detection"
                        width={600}
                        height={400}
                        className={styles.demoImage}
                    />
                    <p className={styles.note}>Please turn the camera on</p>

                    {/* Khung hiển thị kết quả trả về */}
                    <div className={styles.resultBox}>
                        <p className={styles.resultTitle}>Results returned</p>
                        <h2 className={styles.resultLetter}>A</h2>
                        <p className={styles.resultAccuracy}>90% Accuracy</p>
                        <div style={{ margin: '8px 0', height: 8, width: '100%', borderRadius: 8, background: '#eeeeee', overflow: 'hidden' }}>
                            <div style={{ width: '90%', background: '#8A79DF', height: 8, borderRadius: 8 }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
