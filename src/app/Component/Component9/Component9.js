import styles from "./component9.module.css"
import Dupaylogo from "/public/Dupaylogo.jsx"
import Component10 from "../Component10/Component10";
export default function Component9() {
    const flexdata = [
        {
          title: 'Home'
        },
        {
          title: 'Terms and Conditions'
        },
        {
          title: 'About Us'
        },
        {
          title: 'Fee and Limits'
        },
        {
          title: 'Contact Us'
        },
        {
          title: 'FAQ'
        }
      ]
    return(
        <>
            <div className={`${styles.bgimage} container-fluid`}>
                <div className="row px-5 pt-5 pb-5 text-white border bor">
                    <div className="col">
                        <div >
                            <Dupaylogo></Dupaylogo>
                        </div>
                    </div>
                    <div className="col">
                        <h2>Your <span className="border border-light p-2 rounded-3">money</span> , your way.</h2>
                    </div>

                </div>
                <Component10 data={flexdata}></Component10>
            </div>
        </>
    )
}