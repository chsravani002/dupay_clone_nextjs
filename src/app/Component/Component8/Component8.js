import styles from "./component8.module.css"
import Qrcodeimg from "/public/Qrcodeimg.jsx"
export default function Component8() {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row  px-5 py-5 justify-content-center">
                    <div className="col d-flex justify-content-center">
                        <div>
                        <div><h2>Join the future of finance, today.</h2></div>
                        <div><p>Scan to download the du Pay app. Compatible with iOS and Android.</p></div>
                        </div>
                        <div>
                        <Qrcodeimg></Qrcodeimg>
                        </div>
                    </div>
                   
                    </div>
                </div>
        </>
    )
}