"use client";
import styles from "./index.module.css";

export default function I8() {
    return (
        <section className={styles.feedbackSection}>
            {/* Đường phân chia trên cùng (nếu cần) */}
            <div className={styles.topDivider}></div>

            {/* Tiêu đề */}
            <h2 className={styles.title}>Please give us your feedback</h2>

            {/* Form đơn giản: input email + nút Comments */}
            <div className={styles.inputGroup}>
                <input
                    type="email"
                    placeholder="Your Email"
                    className={styles.emailInput}
                />
                <button className={styles.commentButton}>Comments</button>
            </div>

            {/* Footer nội dung */}
            <div className={styles.footerLinks}>
                <span>LHU</span>
                <div className={styles.separator}>|</div>
                <span>LHU ADLEY</span>
                <div className={styles.separator}>|</div>
                <span>YOUR VOICE</span>
            </div>

            <p className={styles.year}>2025+</p>
        </section>
    );
}
