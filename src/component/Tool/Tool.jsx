import Image from "next/image"
import ewmSvg from '../../assets/ewm.svg'
import wechatSvg from '../../assets/wechat.svg'
import Style from './Tool.module.less'
const Tool = ()=>{
    return(
        <div className={Style.bbox}>
            <Image src={ewmSvg} className={Style.img} alt={''}/>
            <div style={{height:'10px'}}/>
            <Image src={wechatSvg} className={Style.img} alt={''}/>
        </div>
    )
}
export default Tool