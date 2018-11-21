
//物流跳交易

// var url = "http://127.0.0.1/e/action/ShowInfo.php?classid=9&id=2";
var url = window.location.href;
/**
 * @desc 获取url参数
 * @param {String} _url  url路径
 */
function parse_url(_url){
    var pattern = /(\w+)=(\w+)/ig;
    var parames = {};
    url.replace(pattern, function(a, b, c){
    parames[b] = c;
    });
    return parames;
}
var parames = parse_url(url);

// console.log(parames.classid);

if (parames.type || sessionStorage.getItem('cys_type') == '2') {

    if (parames.type == 2 || sessionStorage.getItem('cys_type') == '2') { //承运商

        if (parames.token) {
            location.replace(location.href.replace(location.search, ''));
        }

        // window.location.reload();

        // 公共头
        var adct = document.getElementsByTagName('title')[0].getAttribute('adct');

        document.writeln("<footer>\n" +
            "    <div class=\"footerTop1\">\n" +
            "        <div class=\"mianCont\" style=\"position:relative;width: 1230px;height: 90px;background: url(../img/footers_hzf2.png) 0 0 no-repeat\">\n" +
            "           <img class='kefu_png' src='../img/kefu2.png' onclick='_MEIQIA(\"showPanel\")'>\n"+
            "           <span id='unreadNum2'></span>\n"+
            "        </div>\n" +
            "\n" +
            "    </div>\n" +
            "    <div class=\"footerCen mianCont\">\n" +
            "        <div class=\"footerCen1 Lf\">\n" +
            "            <h3><div>新手上路</div></h3>\n" +
            "            <div><a href=\"##\">用户注册</a></div>\n" +
            "            <div><a href=\"##\">用户登录</a></div>\n" +
            "            <div><a href=\"##\">密码找回</a></div>\n" +
            "            <div><a href=\"##\">子账户分配</a></div>\n" +
            "        </div>\n" +
            "        <div class=\"footerCen2 Lf\">\n" +
            "            <h3><div>用户中心</div></h3>\n" +
            "            <div><a href=\"##\">如何发布产品</a></div>\n" +
            "            <div><a href=\"##\">如何发布询盘</a></div>\n" +
            "            <div><a href=\"##\">如何回复报价</a></div>\n" +
            "            <div><a href=\"##\">如何发布需求</a></div>\n" +
            "        </div>\n" +
            "        <div class=\"footerCen3 Lf\">\n" +
            "            <h3><div>现货商城</div></h3>\n" +
            "            <div><a href=\"##\">如何查找现货</a></div>\n" +
            "            <div><a href=\"##\">如何购买现货</a></div>\n" +
            "            <div><a href=\"##\">如何发货</a></div>\n" +
            "            <div><a href=\"##\">如何支付</a></div>\n" +
            "        </div>\n" +
            "        <div class=\"footerCen4 Lf\">\n" +
            "            <h3><div>供应链服务</div></h3>\n" +
            "            <div><a href=\"##\">如何搜索产品</a></div>\n" +
            "            <div><a href=\"##\">服务介绍</a></div>\n" +
            "            <div><a href=\"##\">服务类型</a></div>\n" +
            "            <div><a href=\"##\">服务申请</a></div>\n" +
            "        </div>\n" +
            "        <div class=\"Lf\" style=\"width: 0;height: 105px;border-right: 1px solid #e8e8e8;margin-right: 100px;\"></div>\n" +
            "        <div class=\"footerCen5 Lf\" style=\"margin-top: -17px;\">\n" +
            "            <div class=\"logo\"></div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"footerBot\">\n" +
            "        <ul>\n" +
            "            <li><a class=\"index_page\" href=\"##\">首页</a></li>\n" +
            "            <li class=\"liline\"></li>\n" +
            "            <li><a href=\"##\">合作伙伴</a></li>\n" +
            "            <li class=\"liline\"></li>\n" +
            "            <li><a class=\"about_us\" href=\"../aboutUs.html\">关于我们</a></li>\n" +
            "            <li class=\"liline\"></li>\n" +
            "            <li><a class=\"connect_me\" href=\"../connect.html\">联系我们</a></li>\n" +
            "            <li class=\"liline\"></li>\n" +
            "            <li><a class=\"legal_page\" href=\"../legal.html\">服务条款</a></li>\n" +
            "            <li class=\"liline\"></li>\n" +
            "            <li><a href=\"##\">金融服务</a></li>\n" +
            "        </ul>\n" +
            "        <div></div>\n" +
            "        <div class=\"friendList\">\n" +
            "            <div class=\"Lf friendTitle\">友情链接：&nbsp;&nbsp;&nbsp;</div>\n" +
            "            <a href=\"##\">中泰化学</a>\n" +
            "            <a href=\"##\">鑫汇鑫化工</a>\n" +
            "            <a href=\"##\">丰泰化工</a>\n" +
            "            <a href=\"##\">招商银行</a>\n" +
            "        </div>\n" +
            "        <div>Copyright&nbsp;&copy;&nbsp;2016 www.xjv56.com All Rights Reserved 新疆化学品经营服务平台版权所有&nbsp;新ICP备&nbsp;16002644</div>\n" +
            "    </div>\n" +
            "</footer>");


    } else {
        chang();
        // window.location.reload();
    }
} else {
    chang();
    // window.location.reload();
}

function chang() {
    // 公共头
    var adct = document.getElementsByTagName('title')[0].getAttribute('adct');

    document.writeln("<footer>\n" +
        "    <div class=\"footerTop1\">\n" +
        "        <div class=\"mianCont shouye\" style=\"position:relative;width: 1230px;height: 90px;background: url(../img/footers_hzf2.png) 0 0 no-repeat\">\n" +
        // "            <div class=\"Lf ftphone\">\n" +
        // "                <div class=\"Lf ftphoneImg ftImg1\">\n" +
        // "                    <!--<img src=\"img/footer1.png\" alt=\"\">-->\n" +
        // "                </div>\n" +
        // "                <div class=\"Lf ftphoneText\" style=\"width: 193px;height: 56px;background: url(../img/lft_phone.png) 0 0 no-repeat;background-size: 100% 100%;\">\n" +
        // // "                    <div style=\"height: 28px;line-height: 28px;font-size: 27px;font-weight: 600;color: #FF7C3E;\">4000-012-556</div>\n" +
        // // "                    <div style=\"height: 28px;line-height: 28px;font-size: 16px;\"><span style=\"font-size: 14px;\">工作日:</span>10:00am - 19:00pm</div>\n" +
        // "                </div>\n" +
        // "            </div>\n" +
        // "\n" +
        // "            <div class=\"Lf footer2\">\n" +
        // "                <div class=\"Lf ftImg ftImg2\" style=\"width: 56px;\">\n" +
        // "                    <!--<img src=\"img/footer2.png\" alt=\"\">-->\n" +
        // "                </div>\n" +
        // "                <div class=\"Lf ftText\">\n" +
        // "                    <div style=\"font-size: 18px;font-weight: bold;color: #333;\">在线客服</div>\n" +
        // "                    <div style=\"font-size: 14px;\">立即咨询</div>\n" +
        // "                </div>\n" +
        // "            </div>\n" +
        // "\n" +
        // "            <div class=\"Lf footer3\" >\n" +
        // "                <div class=\"Lf ftImg ftImg3\" style=\"width: 40px;\">\n" +
        // "                    <!--<img src=\"img/footer3.png\" alt=\"\">-->\n" +
        // "                </div>\n" +
        // "                <div class=\"Lf ftText\">\n" +
        // "                    <div style=\"font-size: 18px;font-weight: bold;color: #333;\">邮件客服</div>\n" +
        // "                    <div style=\"font-size: 14px;\">xjv56@163.com</div>\n" +
        // "                </div>\n" +
        // "            </div>\n" +
        // "\n" +
        // "            <div class=\"Lf footer4\" >\n" +
        // "                <div class=\"Lf ftImg ftImg4\" style=\"width: 77px;\">\n" +
        // "                    <!--<img src=\"img/footer4.png\" alt=\"\">-->\n" +
        // "                </div>\n" +
        // "                <div class=\"Lf ftText\">\n" +
        // "                    <div style=\"font-size: 18px;font-weight: bold;color: #333;\">微信订阅号</div>\n" +
        // "                    <div style=\"font-size: 14px;\">扫码关注我们</div>\n" +
        // "                </div>\n" +
        // "            </div>\n" +
        // "\n" +
        // "            <div class=\"Lf footer5\" >\n" +
        // "                <div class=\"Lf ftImg ftImg5\" style=\"width: 77px;\">\n" +
        // "                    <!--<img src=\"img/footer5.png\" alt=\"\">-->\n" +
        // "                </div>\n" +
        // "                <div class=\"Lf ftText\">\n" +
        // "                    <div style=\"font-size: 18px;font-weight: bold;color: #333;\">微信服务号</div>\n" +
        // "                    <div style=\"font-size: 14px;\">扫码关注我们</div>\n" +
        // "                </div>\n" +
        // "            </div>\n" +
        "           <img class='kefu_png' src='../img/kefu2.png' onclick='_MEIQIA(\"showPanel\")'>\n"+
        "           <span id='unreadNum2'></span>\n"+
        "        </div>\n" +
        "\n" +
        "    </div>\n" +
        "    <div class=\"footerCen mianCont\">\n" +
        "        <div class=\"footerCen1 Lf\">\n" +
        "            <h3><div class=\"footerCenTitle\">新手上路</div></h3>\n" +
        "            <div><a data-open=\"zhuce\" href=\"##\">用户注册</a></div>\n" +
        "            <div><a data-open=\"denglu\" href=\"##\">用户登录</a></div>\n" +
        "            <div><a data-open=\"zhaohui\" href=\"##\">密码找回</a></div>\n" +
        "            <div><a data-open=\"fenpei\" href=\"##\">子账户分配</a></div>\n" +
        "        </div>\n" +
        "        <div class=\"footerCen2 Lf\">\n" +
        "            <h3><div class=\"footerCenTitle\">用户中心</div></h3>\n" +
        "            <div><a data-open=\"chanpin1\" href=\"##\">如何发布产品</a></div>\n" +
        "            <div><a data-open=\"xunpan\" href=\"##\">如何发布询盘</a></div>\n" +
        "            <div><a data-open=\"baojia\" href=\"##\">如何回复报价</a></div>\n" +
        "            <div><a data-open=\"xuqiu\" href=\"##\">如何发布需求</a></div>\n" +
        "        </div>\n" +
        "        <div class=\"footerCen3 Lf\">\n" +
        "            <h3><div class=\"footerCenTitle\">现货商城</div></h3>\n" +
        "            <div><a data-open=\"xianhuo1\" href=\"##\">如何查找现货</a></div>\n" +
        "            <div><a data-open=\"xianhuo2\" href=\"##\">如何购买现货</a></div>\n" +
        "            <div><a data-open=\"fahuo\" href=\"##\">如何发货</a></div>\n" +
        "            <div><a data-open=\"zhifu\" href=\"##\">如何支付</a></div>\n" +
        "        </div>\n" +
        "        <div class=\"footerCen4 Lf\">\n" +
        "            <h3><div class=\"footerCenTitle\">供应链服务</div></h3>\n" +
        "            <div><a data-open=\"chanpin2\" href=\"##\">如何搜索产品</a></div>\n" +
        "            <div><a data-open=\"jieshao\" href=\"##\">服务介绍</a></div>\n" +
        "            <div><a data-open=\"leixing\" href=\"##\">服务类型</a></div>\n" +
        "            <div><a data-open=\"shenqing\" href=\"##\">服务申请</a></div>\n" +
        "        </div>\n" +
        "        <div class=\"Lf\" style=\"width: 0;height: 105px;border-right: 1px solid #e8e8e8;margin-right: 100px;\"></div>\n" +
        "        <div class=\"footerCen5 Lf\" style=\"margin-top: -17px;\">\n" +
        "            <div class=\"logo\"></div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"footerBot\">\n" +
        "        <ul>\n" +
        "            <li><a class=\"index_page\" href=\"../index.html\">首页</a></li>\n" +
        "            <li class=\"liline\"></li>\n" +
        "            <li><a href=\"##\">合作伙伴</a></li>\n" +
        "            <li class=\"liline\"></li>\n" +
        "            <li><a class=\"about_us\" href=\"../aboutUs.html\">关于我们</a></li>\n" +
        "            <li class=\"liline\"></li>\n" +
        "            <li><a class=\"connect_me\" href=\"../connect.html\">联系我们</a></li>\n" +
        "            <li class=\"liline\"></li>\n" +
        "            <li><a class=\"legal_page\" href=\"../legal.html\">服务条款</a></li>\n" +
        "            <li class=\"liline\"></li>\n" +
        "            <li><a href=\"##\">金融服务</a></li>\n" +
        "        </ul>\n" +
        "        <div></div>\n" +
        "        <div class=\"friendList\">\n" +
        "            <div class=\"Lf friendTitle\">友情链接：&nbsp;&nbsp;&nbsp;</div>\n" +
        "            <a href=\"##\">中泰化学</a>\n" +
        "            <a href=\"##\">鑫汇鑫化工</a>\n" +
        "            <a href=\"##\">丰泰化工</a>\n" +
        "            <a href=\"##\">招商银行</a>\n" +
        "        </div>\n" +
        "        <div>Copyright&nbsp;&copy;&nbsp;2016 www.xjv56.com All Rights Reserved 新疆化学品经营服务平台版权所有&nbsp;新ICP备&nbsp;16002644</div>\n" +
        "    </div>\n" +
        "</footer>");


        if (adct == '首页') {
            $('.shouye').css('background', 'url(img/footers_hzf2.png) 0 0 no-repeat');
            $('.kefu_png').attr('src', 'img/kefu2.png');
            $('.index_page').attr('href', 'index.html');
            $('.about_us').attr('href', 'aboutUs.html');
            $('.connect_me').attr('href', 'connect.html');
            $('.legal_page').attr('href', 'legal.html');

            $('.footerCen>div>div a').attr('href', 'help/helpCenter.html');
        }

        if (adct == 'help') {
            $('.footerCen>div>div a').attr('href', '##');  
        }

        $('.footerCen>div>div a').click (function () { 
            sessionStorage.setItem('flag_help', $(this).attr('data-open'));
            
            window.location.href = '../help/helpCenter.html';        
        });



        /**
     * [处理未读消息]
     * @param  {[string, object]} msg [string: 'hasBeenRead',
 object: 未读消息数据]
     */
    function yourFunction1(msg) {
        var text = '',
            num = 0;
        if (msg === 'hasBeenRead') { // 消息已被阅读
            num = 0;
            $('#unreadNum2').hide();
        } else if (typeof(msg) === 'object') {
            var unreadNum2 = document.getElementById('unreadNum2').innerHTML,
                lastMsg = msg[msg.length - 1];
            num = isNaN(+unreadNum2) ? msg.length : +unreadNum2 + msg.length;
            // content_type 是消息的类型：
            // text（文字）、photo（图片）、file（文件）
            // content 是消息的内容
            if (lastMsg.content_type === 'text') {
                // 文字消息中可能会存在表情图片，由于路径问题
                // 将文字消息中的图片处理为文字'[表情]'
                text = lastMsg.content.replace(
                    /<img [^>]*src=['"]([^'"]+)[^>]*>/gi, '[表情]'
                );
            } else if (lastMsg.content_type === 'photo') {
                text = '[图片]';
            } else if (lastMsg.content_type === 'file') {
                text = '[文件]';
            } else {
                text = '[新消息]';
            }

            $('#unreadNum2').show();

        }
        // 未读消息数量
        document.getElementById('unreadNum2').innerHTML = num;
        // 最后一条消息的内容
        // document.getElementById('unreadMsg').innerHTML = text;
    } 


    (function(m, ei, q, i, a, j, s) {
        m[i] = m[i] || function() {
            (m[i].a = m[i].a || []).push(arguments)
        };
        j = ei.createElement(q),
            s = ei.getElementsByTagName(q)[0];
        j.async = true;
        j.charset = 'UTF-8';
        j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
        s.parentNode.insertBefore(j, s);
    })(window, document, 'script', '_MEIQIA');
    _MEIQIA('entId', '127367');

    //无按钮
    _MEIQIA('withoutBtn');

     // 获取未读消息
    _MEIQIA('getUnreadMsg', yourFunction1);


}

   
