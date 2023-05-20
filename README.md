```
后端Json配置
{
    "port": 3000,
    "ql": {
        "qlUrl": "",  //青龙面板 地址 (2.11.3版本或者以上的) http://XXX 最后不带/
        "qlClientID": "",  //青龙面板应用ID
        "qlClientSecret": ""  //青龙面板应用密钥
    },
    "wxPusher": {
        "Token": "",//wxPusher应用Token
        "MyUID": ""////wxPusher我的UID
    },
    "notice": "这里是测试公告",  //大屏公告
    "tips": {
        "topTips": "这里是测试top提示",  //顶部提示
        "UpperRight": "这里是测试UR提示"  //右上角提示
    },
    "pay": {
        "status": false,  //Pay支付状态 默认false不开启
        "type": "vmqpay",  //支付类型 vmqpay还是alipay
        "alipay": {},
        "vmqpay": {
            "vmqUrl": "",  //VMQ网址 http://XXX 最后不带/
            "key": "",  //VMQ通讯Key
            "payType": 1,  //VMQ支付方式 收款方式  1微信 2支付宝
            "upPrice": "0.8",  //上传服务器单价
            "getPrice": "0.01",  //获取短信单价
            "wechatPayQrCodeUrl": "",  //微信收款码解析字符串
            "aliPayQrCodeUrl": ""  //支付宝收款码解析字符串
        }
    },
    "appList": [
        {
            "app": "gqcq",
            "name": "广汽传祺",
            "ValueName": {
                "app": "gqcq_data",
                "wx": "gqcqWxCookie",
                "web": null
            }
        },
        {
            "app": "qtx",
            "name": "青碳行",
            "ValueName": {
                "app": "qtx_data",
                "wx": null,
                "web": null
            },
            "config": {
                "deviceCoding":null
            }
        },
        {
            "app": "default",
            "name": "默认",
            "ValueName": {
                "app": null,
                "wx": null,
                "web": null
            }
        }
    ]
}
```
