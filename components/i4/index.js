"use client";
import Image from "next/image";
import styles from "./index.module.css";

export default function I4() {
    return (
        <section className={styles.solutionSection}>
            {/* Phần giới thiệu 'target audience' */}
            <div className={styles.intro}>
                <h2 className={styles.smallHeading}>Our target audience</h2>
                <p className={styles.smallSub}>
                    Our project aims to reach everyone but with a strong focus on the following groups:
                </p>
            </div>
            <div className={styles.topContent}>
                <div className={styles.leftCol}>
                    <div className={styles.mockupWrapper}>
                        <div style={{
                            width: 100, height: 100, borderRadius: 50, background: '#33EFA0', position: 'absolute',
                            top: 0, left: 40
                        }}>
                        </div>
                        <div style={{
                            width: 30, height: 30, borderRadius: 50, background: '#33D9EF', position: 'absolute',
                            top: 10, left: 140
                        }}></div>
                        <div style={{
                            position: 'relative', width: '80%', aspectRatio: '5/3.08', zIndex: 1, backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundImage: 'url(https://lh3.googleusercontent.com/d/1Sg2ivi8AcjDuIuXXl3vx44-hL71A7_2l)'
                        }}>
                            <div style={{ position: 'relative', top: '20%', left: '10%', width: '30%', aspectRatio: '1' }}>
                                <Image src={'https://lh3.googleusercontent.com/d/16snd-9W7Psw6lTXZNYxhUMmX3ZeyCuLA'} fill alt="ds"
                                    style={{ objectFit: 'cover', borderRadius: 8 }} />
                            </div>
                            <div style={{ position: 'absolute', bottom: '10%', left: '5%', display: 'flex', gap: 16, alignItems: 'center' }}>
                                <p style={{
                                    fontSize: 14, background: '#3465E1', color: 'white', padding: '8px 16px', borderRadius: 32,
                                    boxShadow: '0 8.51px 20.43px 0 rgba(52, 101, 225, 0.3);'
                                }}>Translate</p>
                                <p style={{
                                    fontSize: 14, background: '#E13468', color: 'white', padding: '8px 16px', borderRadius: 32,
                                    border: '6px solid #FFD4E1'
                                }}>Feedback</p>
                            </div>
                            <div style={{ position: 'absolute', top: '20%', left: '55%', width: '20%', aspectRatio: '1' }}>
                                <Image src={'https://lh3.googleusercontent.com/d/1RaJZS0qcd4oxPBnxuzAs52il8MzX6NpD'} fill alt="ds"
                                    style={{ objectFit: 'cover', borderRadius: 8 }} />
                            </div>
                            <div style={{ position: 'absolute', top: '55%', left: '55%', width: '20%', aspectRatio: '1' }}>
                                <Image src={'https://lh3.googleusercontent.com/d/1GVqpOp_2_JPsCPEz464VmahtVJckHe8o'} fill alt="ds"
                                    style={{ objectFit: 'cover', borderRadius: 8 }} />
                            </div>
                            <div style={{ position: 'absolute', top: '10%', left: '85%', width: '25%', aspectRatio: '1' }}>
                                <Image src={'https://lh3.googleusercontent.com/d/1wM8jBh7zf78IK5ojR3RpQgH8w397PBSR'} fill alt="ds"
                                    style={{ objectFit: 'cover', borderRadius: 8 }} />
                            </div>
                            <div style={{ position: 'absolute', top: '60%', left: '82%', width: '30%', aspectRatio: '1' }}>
                                <Image src={'https://lh3.googleusercontent.com/d/17p34YCLzmvgMlIT35bQDkxclv1tgfENj'} fill alt="ds"
                                    style={{ objectFit: 'cover', borderRadius: 8 }} />
                            </div>
                        </div>
                        <div style={{
                            width: 180, height: 180, borderRadius: '50%', background: '#5B61EB', position: 'absolute',
                            bottom: 20, right: 80, zIndex: 0
                        }}>
                        </div>
                        <div style={{
                            width: 25, height: 25, borderRadius: 50, background: '#F56666', position: 'absolute',
                            bottom: 20, right: 250, zIndex: 0
                        }}></div>
                    </div>
                </div>
                <div className={styles.rightCol}>
                    <h2 className={styles.mainHeading}>
                        The “Your Voice” solution is designed for
                    </h2>
                    <ul className={styles.featureList}>
                        <li>
                            <div style={{
                                width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: 25, boxShadow: '0px 15px 44px 0px rgba(13, 15, 28, 0.12)'
                            }}>
                                <div style={{ display: 'flex', width: 22, height: 22, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                    <div style={{ width: 10, height: 10, background: '#2F327D', borderRadius: 2 }}></div>
                                    <div style={{ width: 10, height: 10, background: '#2F327D', borderRadius: 2 }}></div>
                                    <div style={{ width: 10, height: 10, background: '#2F327D', borderRadius: 2 }}></div>
                                    <div style={{ width: 10, height: 10, background: '#F48C06', borderRadius: 2 }}></div>
                                </div>
                            </div>
                            <p> <strong>Teachers & Lecturers: </strong>
                                Easily interact and support hearing impaired students
                                through a friendly interface and intuitive sign language
                                translation tool.
                            </p>
                        </li>
                        <li>
                            <div style={{
                                width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: 25, boxShadow: '0px 15px 44px 0px rgba(13, 15, 28, 0.12)'
                            }}>
                                <div style={{ width: 22, height: 22, position: 'relative' }}>
                                    <div style={{
                                        width: 16, height: 16, background: '#F48C06', borderRadius: 2, position: 'absolute',
                                        top: 0, left: 0, zIndex: 2
                                    }}></div>
                                    <div style={{
                                        width: 16, height: 16, background: '#2F327D', borderRadius: 2, position: 'absolute',
                                        bottom: 0, right: 0, zIndex: 1
                                    }}></div>
                                </div>
                            </div>
                            <p> <strong>Group of deaf people: </strong>
                                Get the opportunity to reach out and express yourself through modern gesture recognition technology.
                            </p>
                        </li>
                        <li>
                            <div style={{
                                width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: 25, boxShadow: '0px 15px 44px 0px rgba(13, 15, 28, 0.12)'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height={22} width={22} fill="#2F327D">
                                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
                                </svg>
                            </div>
                            <p> <strong>Parents & Caregivers: </strong>
                                Support your children to learn and communicate more effectively in an inclusive educational environment.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Phần Download */}
            <div className={styles.downloadSection}>


                <div style={{ display: 'flex' }}>
                    <div className={styles.downloadWrapper} style={{ flex: 1 }}>
                        <h3 className={styles.downloadTitle}>Download and experience</h3>
                        {/* Nút Download APK */}
                        <a href="#" className={styles.downloadButton + " " + styles.androidBtn}>
                            <Image src={'https://lh3.googleusercontent.com/d/1Luc8CmGfr_S5ehiNljDY-DYLhkrSje_Y'} height={65} width={65} alt="jd" />
                            Download APK
                        </a>
                        {/* Nút Download iOS */}
                        <a href="#" className={styles.downloadButton + " " + styles.iosBtn}>
                            <Image src={'https://lh3.googleusercontent.com/d/1G_ZAS3FQCn1RrzLH-WT0gCQJy7LYVe9B'} height={65} width={65} alt="jd" />
                            Download iOS
                        </a>
                    </div>

                    {/* Mockup điện thoại */}
                    <div className={styles.phoneMockup} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <div style={{ position: 'relative', aspectRatio: 1, width: '90% ' }}>
                            <Image
                                src="https://lh3.googleusercontent.com/d/1YY0ofZitw4Z01d0YGvcGOoHaUiuGY6w3"
                                alt="Your Voice Application"
                                fill
                                className={styles.mockupPhoneImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
