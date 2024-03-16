import {useEffect, useRef} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Insurance from "../src/component/Insurance/Insurance";
import SuccessPanel from "../src/component/SuccessPanel/SuccessPannel";
import Apply from "../src/component/Apply/Apply"
import MotoHome  from "../src/view/MotoHome/MotoHome";
import {useSelector} from "react-redux";
import MTNetwork from "../src/network/MTNetwork";

export async function getServerSideProps({ req, res }) {
    res.setHeader(
        'Cache-Control',
        // 'no-cache, no-store, max-age=0, must-revalidate'
        'no-cache'
        // 'public, s-maxage=10, stale-while-revalidate=59'
    )
    let DATA = await MTNetwork.getInsurance();
    if (!DATA) {
        return {
            props: {
                notFound: true
            }
        }
    } else {
        return {
            props: {
                insuranceData: DATA
            }
        };
    }
}

export default function Index(props) {
    let {insuranceData} = props;
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
        let u = navigator.userAgent;
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
                <title>摩安保</title>
                <meta name="description" content="提供在线办理摩托车保险业务，提供专业的意见和建议！"/>
                <meta name="keywords" content="摩托车保险,摩托车交强险,摩托车三者险,摩托车盗抢险,如何购买摩托车保险"/>
                <meta name="baidu-site-verification" content="codeva-S1aaX4ALBY" />
                <link rel="icon" href="/motosafe.svg"/>
            </Head>
            <MotoHome/>

            {/*<Insurance insuranceData={insuranceData}/>*/}
            {/*提交成功弹窗*/}
            {/*{showSuccessPanel && <SuccessPanel/>}*/}


            {/*<Apply/>*/}
        </div>
    )
}
