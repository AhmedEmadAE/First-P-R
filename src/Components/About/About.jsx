import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionHeading}>ABOUT COMPONENT</h2>
                <div className={styles.starDivider}>
                    <div className={styles.line}></div>
                    <i className={styles.starIcon}>★</i>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.colLg6}>
                        <p className={styles.aboutText}>
                            Freelancer is a free bootstrap theme created by Route. The download includes
                            the complete source files including HTML, CSS, and JavaScript as well as
                            optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className={styles.colLg6}>
                        <p className={styles.aboutText}>
                            Freelancer is a free bootstrap theme created by Route. The download includes
                            the complete source files including HTML, CSS, and JavaScript as well as
                            optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;