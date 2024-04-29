import styles from "./component7.module.css";
import Image from "next/image";

export default function Component7({ data }) {
    return (
        <>
            <div className="container-fluid">
                <div><h2> In case you need to know more</h2></div>
                <div><h3>Explore every detail of du Pay</h3></div>

                <div className={`${styles.divpadding} d-flex justify-content-between border border-dark `}>
                    {data.map((x) => {
                        return (
                            <>
                                <div className={`${styles.blocksize} border border-dark py-5 px-3 `}>
                                    {x.svg}
                                    <h3 className={styles.h3style}>{x.title}</h3>
                                    <p>{x.description}</p>
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>


        </>
    )
}