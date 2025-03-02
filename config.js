/*
 * @Author: 柒刻
 * @Date: 2025-02-22 23:18:06
 * @LastEditTime: 2025-02-26 12:19:20
 * @FilePath: \xiaomi\config.js
 * 
 * 有趣的密码提示语收集：
 * 1. "你猜我有没有密码(｀・ω・´)"
 * 2. "密码？不存在的！(๑•̀ㅂ•́)و✧"
 * 3. "这个密码很神秘哦(●ˇ∀ˇ●)"
 * 4. "偷偷告诉你，这是假的密码(｡◕‿◕｡)"
 * 5. "密码被猫吃了(ฅ´ω`ฅ)"
 * 6. "这哪有什么密码(￣▽￣)~*"
 * 7. "密码在月球上呢(∩_∩)/"
 * 8. "你看不见我，看不见我⊙▽⊙"
 * 9. "这是一个假装有密码的密码✧( •̀ ω •́ )✧"
 * 10. "密码正在度假中(～￣▽￣)～"
 * 11. "密码君表示不想出现╮(╯▽╰)╭"
 * 12. "密码？我也想知道(｀・ω・´)"
 * 13. "这里本来有个密码，但是它跑了(◍•ᴗ•◍)"
 * 14. "密码去追寻梦想了✿◡‿◡"
 * 15. "密码在另一个次元(｡♥‿♥｡)"
 * 
 * danger // 红色警告
 * warning  // 黄色警告
 * info  // 默认蓝色提示
 */
const linksConfig = {
    categories: [
        {
            name: "工作平台",
            order: 1,
            links: [
                {
                    title: "小米工作台",
                    url: "https://asp.mi.com",
                    username: "13453140073",
                    password: "ww2391695405.+-",
                    warning: "首次登录需要进行手机验证"
                },
                {
                    title: "小米知识库",
                    url: "https://kbs.be.xiaomi.com",
                    username: "13453140073",
                    password: "ww2391695405.+-",
                    warning: "首次登录需要进行手机验证"
                },
                {
                    title: "小米POS",
                    url: "pos.be.xiaomi.com",
                    username: "13453140073",
                    password: "ww2391695405.+-",
                    warning: "首次登录需要进行手机验证"
                }
            ]
        },
        {
            name: "税务相关",
            order: 2,
            links: [
                {
                    title: "北京税务系统",
                    url: "https://etax.beijing.chinatax.gov.cn:8443/loginb/",
                    username: "13453140073",
                    password: "ww2391695405.+-",
                    warning: "请使用Chrome浏览器访问，登录时请确保安全控件已安装"
                },
                {
                    title: "国补核销",
                    url: "http://xm.58woshop.com/beiJian_coupon/main.html",
                    username: "15810621731",
                    password: "1731yksj@1125",
                    warning: "国补核销管理系统"
                }
            ]
        },
        {
            name: "电商后台",
            order: 3,
            links: [
                {
                    title: "京东到家商家版",
                    url: "https://store.jddj.com",
                    username: "13453140073",
                    password: "看啥呢，没有( •̀ ω •́ )✧",
                    warning: "商家后台管理系统"
                },
                {
                    title: "抖音商家后台",
                    url: "https://fxg.jinritemai.com/login",
                    username: "13453140073",
                    password: "二次加密了啦(●'◡'●)",
                    warning: "抖音电商商家后台"
                }
            ]
        },
        {
            name: "文档管理",
            order: 4,
            links: [
                {
                    title: "清河物料登记表",
                    url: "https://docs.qq.com/sheet/DUFpWTHBrUVhhamNK?_t=1735875313939&tab=BB08J2",
                },
                {
                    title: "现金收取登记表",
                    url: "https://docs.qq.com/sheet/DUnRpakdSckt0QmJi?tab=BB08J2",
                },
                {
                    title: "国补电子发票登记表",
                    url: "https://docs.qq.com/sheet/DVkNvQm1DYWRDd2VY?tab=qjnnhj"
                }
            ]
        },
        {
            name: "常用工具",
            order: 5,
            links: [
                {
                    title: "小米售后检测系统软件",
                    url: "https://kbs.be.xiaomi.com/home/#path=%40%2Fzhishi%2Fdetail%3Fid%3D80845344",
                    warning: "手机自动化检测工具"
                },
                {
                    title: "PixPin",
                    url: "https://pixpin.cn",
                    warning: "强大且免费的截图贴图工具"
                },
                {
                    title: "捕捉网页截图 - FireShot",
                    url: "https://chromewebstore.google.com/detail/%E6%8D%95%E6%8D%89%E7%BD%91%E9%A1%B5%E6%88%AA%E5%9B%BE-fireshot%E7%9A%84/mcbpblocgmgfnpjjppndjkmgjaogfceg",
                    warning: "强大的网页截图工具"
                },
                {
                    title: "uBlock Origin",
                    url: "https://ublockorigin.com/zh",
                    warning: "强大的广告拦截工具"
                },
                {
                    title: "Cookie-Editor",
                    url: "https://cookie-editor.com/",
                    warning: "Cookie编辑器"
                },
            ]
        }
    ]
}; 