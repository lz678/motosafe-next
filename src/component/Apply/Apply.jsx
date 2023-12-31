import Style from './Apply.module.less'
import {useEffect} from "react";
import MTNetwork from "../../network/MTNetwork";
let Apply = ()=>{
    useEffect(() => {
        _addCount()
        // _getInsuranceData()
    }, [])
    let _addCount = () => {
        try {
            let userAgent = window.navigator.userAgent
            let model = userAgent.match(/\(.*?\)/)[0]
            MTNetwork.addCount({model})
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={Style.bbox}>
            {/*<div>兴趣爱好分享</div>*/}
            {/*<div className={Style.text}>第一次接出“动漫这样东西，是在我刚上小学的时候。*/}

            {/*    我看的第一本漫画，名字叫做《机器猫》（现已改名为哆啦A梦），当时在我们小孩子们中很流行的那个玩意儿。那时候，我睁圆两只大大的眼睛，看看那些各种奇形怪状，黑黑白白的图案再傻傻地瞪着上面那些复杂的方块字它们认得我，我不认得它们。*/}

            {/*    为了不落伍我也向同学借了一本漫画书，我看完了还给她的时候，还笑嘻嘻地说：“这本画画书很好看哎，不过没有电视里在放的那个动画片好看哦！她差点当场吐血“笨蛋，那叫动漫啦！*/}

            {/*    哦，动漫这个新鲜的名词在我脑海中留下了很深的印象。*/}

            {/*    度过了懵懂的小学生涯，我摇身一变成了中学生。*/}

            {/*    当我第N次因为上课外班偷看漫画而被老师恐吓要向我老妈告状时候；当我第N+2次千方百计找尽接口千恩百谢恳求父母就为了看一集动画片的时候；当我第2N次痛下决心交出口袋里仅有的几张钞票只为了买一本漫画的时候；当我第N—2次看见动画DCD店老板笑得满脸开花恨不得送我一块“优秀顾客牌匾的时候；我终于发现了我已经无可救要地爱上动漫了，这个让人又爱又恨的家伙。*/}

            {/*    现在，我已经升入了初三，在努力学习的同时，我对动漫的决心信心恒心同情心更是始终不移的。我同时喜欢很多很多的漫画家，又同时恨不得买下一整家漫画书店和动画DCD店，再同时希望自己能一口气看完所有所有的漫展的时候，还同时口袋里的钞票哗哗地向流水一样被丢进黄浦江付诸东流，我觉得，我真的是爱上动漫了，它已经成为了我生命的一部分了。*/}

            {/*    最后我要说：我爱的过去，现在，也许将来都只有一个动漫！</div>*/}
            <div className={Style.tip}>
                页面维护中！<br/>详情请添加摩安保微信<br/>微信号：motosafe
            </div>

            <a href="https://beian.miit.gov.cn/" target="_blank" className={Style.id}>蜀ICP备2022027478号-1</a>
        </div>
    )
}
export default Apply