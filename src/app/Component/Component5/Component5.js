import styles from "./component5.module.css";
import image from './component5img.jpg';

export default function Component5(){
    return(
        <>
        <div className="container-fluid">
            <div className={`${styles.padding} row `}>
                <div className="col border border-5 dark px-0">
                    <h6>Get started in 3 simple steps</h6>
                    <ul>
                        <li>Download the du Pay app.</li>
                        <li>Keep your Emirates ID handy and complete the simple verification.</li>
                        <li>Add money into your wallet through your inward bank transfer or via our network of payment machines.</li>
                    </ul>
                    <p>You are now ready to send money nearly anywhere with du Pay. </p>
                </div>
                <div className="col border border-dark px-0">
                    <div className="w-100 ">
                  <img src={image.src} alt="dummy" className="w-100" />
                  </div>
                </div>

            </div>

        </div>
        </>
    )
}