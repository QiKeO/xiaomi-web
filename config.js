/*
 * @Author: 柒刻
 * @Date: 2025-02-22 23:18:06
 * @LastEditTime: 2025-02-26 12:19:20
 * @FilePath: \xiaomi\config.js
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
                    warning: "首次登录需要进行手机验证"
                },
                {
                    title: "小米知识库",
                    url: "https://kbs.be.xiaomi.com",
                    warning: "首次登录需要进行手机验证"
                },
                {
                    title: "小米POS",
                    url: "pos.be.xiaomi.com",
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
                    warning: "请使用Chrome浏览器访问，登录时请确保安全控件已安装"
                },
                {
                    title: "国补核销",
                    url: "http://xm.58woshop.com/beiJian_coupon/main.html",
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
                    warning: "商家后台管理系统"
                },
                {
                    title: "抖音商家后台",
                    url: "https://fxg.jinritemai.com/login",
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