import Style from './MotoHome.module.less'
import LogoSvg from '../../assets/logo.svg'
import backgroundTwo from "../../assets/moto_two.webp";
import ImgOne from '../../assets/gzh.jpg'
import ImgFive from '../../assets/moto_five.jpg'
import ImgSix from '../../assets/ewm.jpg'
import Image from "next/image"
import classnames from 'classnames'
import {useEffect} from "react";
import MTNetwork from "../../network/MTNetwork";
const MotoHome = ()=>{
    useEffect(() => {
        _addCount()
    }, [])
    let _addCount = () => {
        try {
            let userAgent = window.navigator.userAgent
            let model = '首页'+userAgent.match(/\(.*?\)/)[0]
            MTNetwork.addCount({model})
        } catch (error) {
            console.log(error);
        }
    }
    const cardList = [
        {
            img:ImgOne,
            title:'摩托车交强险',
            desc:'摩托车交强险是国家强制购买的。没有交强险是不能上路的。摩托车是机动车所以和汽车一样都要买交强险，交强险是指当被保险的摩托车发生道路交通事故造成他人的人身伤亡、财产损失时，保险公司给予对方赔偿，不保障自己车辆和人身损失。其次，交强险财产损失最高赔付两千。'
        },
        {
            img:LogoSvg,
            title:'摩托车三者险',
            desc:'摩托车三者险，又称第三者商业责任险，含义是指被保险人或其允许的合法驾驶人员在使用被保险车辆过程中发生的意外事故，致使第三者遭受人身伤亡或财产直接损失，依法应当由被保险人承担经济责任，保险公司负责赔偿。翻译成大白话，意思就是你自己或者你的朋友驾驶你的摩托车，发生交通事故并造成人员伤亡或者财产损失，这个时候三者险将会赔偿交强险赔付后剩余的金额。（例子:某天小明骑摩托车不小心和一辆汽车发生刮擦，汽车修理费为5万。交强险最多只能赔付2000，是远远不够的，如果买了三者险，那么三者险将会继续赔付剩余的4.8万'
        },
        {
            img:ImgFive,
            title:'摩托车盗抢险',
            desc:'摩托车盗抢险，摩托车盗抢险是指全车被盗窃以及在被盗窃期间受到损坏或车上零部件、附属设备丢失需要修复的合理费用。以及被盗期间必要的交通费用补贴。在规定时间内车辆未找回，赔偿车辆受益人裸车价+购置税。'
        }
    ]
    let _drawList = ()=>{
        return cardList.map((item,index)=>{
            return (
                <div className={classnames(Style.list_item,index%2===0?'':Style.flex_reverse)} key={index}>
                    <Image className={Style.list_img} src={item.img} alt={item.title} loading='lazy'/>
                    <div className={Style.space}/>
                    <div className={Style.list_text}>
                        <p className={Style.title}>{item.title}</p>
                        <span>{item.desc}</span>
                    </div>
                </div>
            )
        })
    }
    let _jump = ()=>{
        window.location.href='http://www.motosafe.xyz/fill'
    }
    return (
        <div className={Style.bbox}>
            <div className={Style.top_box}>
                <div className={Style.top_content}>
                    <div className={Style.connect_img}>
                        <Image src={ImgSix} alt={'摩安保'}/>
                    </div>
                    <a className={Style.info_fill} href={'http://www.motosafe.xyz/fill'}>联系我们</a>
                    <Image className={Style.logo_img} src={LogoSvg} alt='摩托车交强险' priority={true}/>
                    <div className={Style.info}>
                        <span className={Style.look_for}>Look for us!</span>
                        <h1 className={Style.h_title}>专业摩托车保险</h1>
                        <span className={Style.desc}>
                        我们将会为您提供办理摩托车保险的业务<br/>专人一对一服务 给出最专业意见和建议<br/>交强险  三者险  盗抢险  车损险<br/>
                        微信号：<span className={Style.moto_Id}>motosafe</span>
                    </span>
                    </div>
                </div>
            </div>
            <div className={Style.list_box}>
                {_drawList()}
            </div>
            <div className={Style.foot_box}>
                <a href="https://beian.miit.gov.cn/" target="_blank" className={Style.ICP}>蜀ICP备2022027478号-1</a>
                <div>推荐扫码二维码或者添加微信号</div>
            </div>
        </div>
    )
}
export default MotoHome