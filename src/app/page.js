import styles from "./page.module.css"
import UserIcon from '/public/user.jsx'
import Header from "./Component/Header/Header";
import Component1 from "./Component/Component1/Component1";
import Component2 from "./Component/Component2/Component2";
import Component3 from "./Component/Component3/Component3";
import Component4 from "./Component/Component4/Component4";
import Component5 from "./Component/Component5/Component5";
import Component6 from "./Component/Component6/Component6";
import Component7 from "./Component/Component7/Component7";
import Swapicon from "../../public/Swapicon";
import Securityicon from "../../public/Securityicon";
import Component8 from "./Component/Component8/Component8";
import Component9 from "./Component/Component9/Component9";
import Languagelogo from "../../public/Languagelogo";
import Globelogo from "../../public/Globelogo";
import Paymenticon from "../../public/Paymenticon";



export default function Home() {
  const features = [
    {
      image: 'image.jpg',
      isLogoAvailable:true,
      logo:<Languagelogo></Languagelogo>,
      title: 'A Multilingual Experience',
      description: 'Language barriers are a thing of the past. Navigate our app in Arabic, English, Hindi, Malayalam, Tamil and Bangla.'
    },
    {
      image: 'image2.jpg',
      isLogoAvailable:true,
      logo:<Globelogo></Globelogo>,
      title: 'Instant Money Transfer',
      description: 'Send money right away, anytime, from your phone. It’s fast, easy, and always there when you need it the most.'
    },
    {
      image: 'image3.jpg',
      title: 'Payments made simple',
      isLogoAvailable:true,
      logo:<Paymenticon></Paymenticon>,
      description: 'Simplify your everyday life with our app. Effortlessly pay your bills or top-up your mobile in just few steps.'
    },
    {
      image: 'image4.jpg',
      isLogoAvailable:false,
      title: 'Your trust is our priority',
      description: 'du Pay is a secure mobile payment service, regulated by the Central Bank of the UAE. We use the highest-grade security measures to keep your transactions and data safe. Place your trust in du Pay to keep your financial information secure.'
    }
  ];


  const knowMore = [
    {
      title: 'Account',
      description: '17 Topics',
      svg: <UserIcon></UserIcon>
    },
    {
      title: 'Transaction',
      description: '12 Topics',
      svg: <Swapicon></Swapicon>
    },
    {
      title: 'Account Security',
      description: '5 Topics',
      svg: <Securityicon></Securityicon>
    }
  ]
  

  
  return (
    <>
      <Header></Header>
      <Component2></Component2>
      {
        features.map((value, index) => {
          return (
            <Component3 reverse={index % 2 !== 0} data={value} key={index}></Component3>
          )
        })
      }
      <Component4></Component4>
      <Component5></Component5>
      <Component6></Component6> 
      <Component7 data={knowMore}></Component7>
      <Component8></Component8>
      <Component9 ></Component9>
     
    </>
  );
}
