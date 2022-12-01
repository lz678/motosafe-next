import {useEffect, useRef} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Insurance from "../src/component/Insurance/Insurance";
import SuccessPanel from "../src/component/SuccessPanel/SuccessPannel";
import {useSelector} from "react-redux";
import MTNetwork from "../src/network/MTNetwork";

export async function getStaticProps() {
    // let insuranceData = await MTNetwork.getInsurance()
    // let insuranceData = {}
    let insuranceData = await MTNetwork.getInsurance()
    if (insuranceData && insuranceData.data) {
        return {
            props: {
                insuranceData: insuranceData.data
            },
            // revalidate: 1000,
        }
    } else {
        return {
            props: {
                insuranceData: [{num: 0}]
            },
            // revalidate: 1000,
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
    let originHeight = useRef(null)
    useEffect(() => {
        _bindHeightLister()
        return () => {
            _unbindHeightLister()
        }
    }, [])
    let _bindHeightLister = () => {
        originHeight.current = document.body.clientHeight
        window.addEventListener("resize", _judgeKeyboardState);
    }
    let _unbindHeightLister = () => {
        window.removeEventListener("resize", _judgeKeyboardState);
    }
    let _judgeKeyboardState = () => {
        // 解决 andriod 软键盘打开-关闭后  造成网页高度被破坏
        const resizeHeight = document.body.clientHeight
        var u = navigator.userAgent;
        let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
        if (isAndroid) {
            if (resizeHeight < originHeight.current) {
                // 键盘弹起
                document.querySelector('body').setAttribute('style', 'height:' + originHeight.current + 'px;');
            } else {
                // 键盘收起
                document.querySelector('body').setAttribute('style', 'height:100%;');
            }
        }
    }
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
