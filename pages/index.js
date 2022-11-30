import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Insurance from "../src/component/Insurance/Insurance";
import SuccessPanel from "../src/component/SuccessPanel/SuccessPannel";
import {useSelector} from "react-redux";
import MTNetwork from "../src/network/MTNetwork";

export async function getStaticProps() {
   let insuranceData = await MTNetwork.getInsurance()
    return {
        props: {
            insuranceData: insuranceData.data.data
        }
    }
}

export default function Index(props) {
    let {insuranceData} = props
    let {showSuccessPanel} = useSelector((store) => {
        return {
            showSuccessPanel: store.mainReducer.showSuccessPanel
        }
    })
    return (
        <div className={styles.container}>
            <Head>
                <title>摩安保-放心骑</title>
                <meta name="baidu-site-verification" content="code-BtSgOThgFs"/>
                <meta name="description" content="提供专业的摩托车保险服务，交强险，三者险，盗抢险。"/>
                <meta name="keywords" content="如何买摩托车保险,摩托车保险,摩托车险,专业摩托车保险,摩托车交强险,摩托车三者险,摩托车盗抢险,交强险,三者险,盗抢险"/>
                <link rel="icon" href="/LOGO.png"/>
            </Head>
            <Insurance insuranceData={insuranceData}/>
            {showSuccessPanel && <SuccessPanel/>}
        </div>
    )
}
