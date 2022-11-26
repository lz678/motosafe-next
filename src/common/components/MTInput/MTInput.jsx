import React, { useImperativeHandle, useState } from 'react'
import Style from './MTIput.module.less'
import classNames from 'classnames'
const MTInput = (props, ref) => {
    let { request, value, change, label, placeholder, classname } = props
    const [err, setErr] = useState(null)
    useImperativeHandle(ref, () => {
        return {
            setTip: _setTip,
            cleanTip: _cleanTip
        }
    })
    let _change = (e) => {
        if (change) {
            change(e.target.value)
        }
    }
    let _setTip = (text) => {
        setErr(text)
    }
    let _cleanTip = () => {
        setErr(null)
    }

    return (
        <div className={classNames(Style.out_box, classname)}>
            {label &&
                <span className={Style.label}>
                    {request && <span className={Style.request}>*</span>}
                    {label}
                </span>}
            <div className={Style.input_box}>
                <input value={value} placeholder={placeholder} onChange={_change} className={Style.input} />
            </div>
            {err ? <div className={Style.err_tip}>{err}</div> : <div className={Style.err_tip} />}
        </div>

    )
}
export default React.forwardRef(MTInput)