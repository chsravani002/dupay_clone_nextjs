import Appgallery from "../../../../public/Appgallery";
import Applelogo from "../../../../public/Applelogo";
import Playstore from "../../../../public/Playstore";
import styles from "./component11.module.css";


export default function Component11({ data }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row ps-5">
                    <div className="col-5 d-flex  gap-4">
                        {data.map((x, i) => {
                            return (
                                <>
                                    <div key={i}>
                                        <a href="">{x.image} </a>
                                    </div>
                                </>
                            )
                        })
                        }
                    </div>
                    <div className="col pb-5">
                        <h2 className="text-light">
                            Download du pay
                        </h2>
                        <div>
                            <a href=""><Applelogo></Applelogo></a>
                            <a href=""><Playstore></Playstore></a>
                            <a href=""><Appgallery></Appgallery></a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}