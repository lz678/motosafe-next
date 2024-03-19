import { useDispatch } from 'react-redux'
import mainAction from '../../redux/action/mainAction'
import Style from './SuccessPanel.module.less'
let SuccessPanel = () => {
    let dispatch = useDispatch()
    let _ok = () => {
        dispatch(mainAction.setSuccessPanelAction(false))
    }
    return (
        <div className={Style.panel_box}>
            <div className={Style.content}>
                <span className={Style.text}>
                    <span className={Style.tip}> 信息提交成功！</span>
                   客服会在短时间内联系您！<br/>添加微信号:<span style={{color:'#ff6412'}}>motosafe</span>更快捷！
                </span>
                <div className={Style.btn} onClick={_ok}>
                    确定
                </div>

            </div>
        </div>
    )
}
export default SuccessPanel