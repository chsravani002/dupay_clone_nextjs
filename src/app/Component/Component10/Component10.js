import styles from "./component10.module.css"
import Component11 from "../Component11/Component11";
import Facebooklogo from "../../../../public/Facebooklogo";
import Insta from "../../../../public/Insta";
import Twitter from "../../../../public/Twitter";
import Youtube from "../../../../public/Youtube";
import Linkedin from "../../../../public/Linkedin";


export default function component10({ data }) {
    const svgimages = [{
        image: <Facebooklogo></Facebooklogo> 
    },
    {
        image: <Twitter></Twitter>
    },
    {
        image: <Insta></Insta>
       
    },
    {
        image: <Linkedin></Linkedin>
       
    },
    {
        image: <Youtube></Youtube>
    }]

    return (
        <>
            <div className="container-fluid">
                <div className="row   ps-5  py-5 ">
                    <div className="col col-lg-4 d-flex flex-wrap ">
                        {data.map((x) => {
                            return (
                                <>
                                    <p className="w-50">
                                        <a href="" className="text-white text-decoration-none ">{x.title}</a>
                                    </p>
                                </>
                            )
                        }
                        )}
                    </div>
                </div>
                <Component11 data={svgimages}></Component11>

            </div>
        </>
    )
}