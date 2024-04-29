import Text from "../Text/Text";
import styles from "./component1.module.css";
export default function Component1() {
    return (
        <>
            <div className={`${styles.bgimage} container-fluid`}>
                <div className="row flex-nowrap">
                    <div className={`${styles.padding} px-5 col `}>
                        <h1 className={styles.h3style}>Send money back home with du Pay </h1>
                        <Text fsize='l' classNames="text-light">Free first International transfer and get 10GB or more.</Text>

                        <div>
                            <div>
                                <h3>Try it out!</h3>
                                <Text fsize='s' classNames="text-light">Scan to download app, compatible with iOS and Android.</Text>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col">
                       <img src="mobile.jpg" alt="mobile"className="w-100 border" ></img>
                    </div>
                </div>
              
            </div>
        </>

    )
}