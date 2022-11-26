import { useDispatch } from 'react-redux'
import mainAction from '../../redux/action/mainAction'
import Style from './SuccessPanel.module.less'
let SuccessPanel = () => {
    let dispatch = useDispatch()
    let _ok = () => {
        dispatch(mainAction.setSuccessPanelAction(false))
    }
    return (
        <div className={Style.pannel_box}>
            <div className={Style.content}>
                <span className={Style.text}>
                    信息提交成功！工作人员会在1~2工作日内联系您！
                </span>
                <div className={Style.btn} onClick={_ok}>
                    确定
                </div>

            </div>
        </div>
    )
}
export default SuccessPanel