import styles from "./Component3.module.css";
export default function Component3(props) {
    return (
        <>
            <div className={`${styles.divpad}  container-fluid `}>
                <div className={`${props.reverse && styles.cardReverse} d-flex gap-3`}>
                    <div className="w-50 ">
                        <img src={props.data.image} className="w-100"></img>
                    </div>
                    {props.data.isLogoAvailable=true && <div className="border border-light bg-light rounded-5 w-50 p-5">
                        {props.data.logo}
                        <h2 className="pt-4">{props.data.title} </h2>
                        <p >{props.data.description}</p>
                    </div>}
                </div>
            </div>

        </>
    )
}