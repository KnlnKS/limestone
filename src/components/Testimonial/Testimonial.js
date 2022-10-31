import styles from "./Testimonial.module.css";
import {Image} from "@chakra-ui/react";

function Testimonial({title}) {
    return (
        <div className={styles.testimonial_container}>
            <Image src={"/placement.png"} alt={"Boston Consulting Group"}></Image>
            <div className={styles.container_right}>
                <div className={styles.placement_name}>Iain McKenzie</div>
                <div className={styles.placement_desc}>
                    In ad laborum duis aliqua cupidatat. Irure aliqua Lorem voluptate sint. Lorem
                    pariatur non non ex fugiat dolor occaecat fugiat.
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
