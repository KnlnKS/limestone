import styles from "./Slideshow.module.css";

function Slideshow({title}) {
    return (
        <div className={styles.company_container}>
            <p className={styles.container_title}>{title}</p>
            <div className={styles.container_underline}></div>
            <div className={styles.slideshow}>
                <div className={styles.mover}></div>
            </div>
        </div>
    );
}

export default Slideshow;
