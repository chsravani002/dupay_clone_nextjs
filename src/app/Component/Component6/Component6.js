import styles from "./component6.module.css"
import flags from '/public/country_flags.svg';
import Image from 'next/image';

export default function Component6() {
    return (
        <>
        <div className={styles.imgpadding}>
            <Image
                src={flags}
                alt="Country Flags" 
            />
            </div>
        </>
    )
}