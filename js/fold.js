
// 问答点击显示／隐藏
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
        ;
    }
    var accordion = new Accordion($('.accordion'),false);
});

// 刷新后一秒钟弹出常见问题，显示5秒后隐藏
setTimeout( function(){ 

        var expanded = cookie.get("expanded");

        if(!expanded){
            $('.aui-flexView').animate({right:'0px'},500);
            $('.bar>img').css('transform','rotate(270deg)');
            //设置cookie
            cookie.set("expanded",1,1);
        }
        setTimeout( function(){
            $('.aui-flexView').animate({right:'-360px'},500);
            $('.bar>img').css('transform','rotate(90deg)');
        }, 5 * 1000 );
        expanded = !expanded;


}, 1 * 1000 );//延迟5000毫米

// 点击弹出／隐藏
$(function(){
    var expanded = true;
    $('.bar').click(function(){
        if(expanded){
            $('.aui-flexView').animate({right:'0px'},500);
            $('.bar>img').css('transform','rotate(270deg)');
        }else{
            $('.aui-flexView').animate({right:'-360px'},500);
            $('.bar>img').css('transform','rotate(450deg)');
        }
        expanded = !expanded;
    });

});

let cookie = {
  //参数分别是cookie的名称，cookie的值，cookie的有效时间
    set : function(key ,value, time) {
        let date = new Date();
        let expiresDays = time;
        date.setTime(date.getTime() + expiresDays * 12 * 3600 *1000);
        // alert(date);
        //这里是添加到已有的cookie中， 不要弄成+=
        document.cookie = key + '=' + value + ";expores=" + date.toTimeString();
    },
    get : function(key) {
        let getCookie = document.cookie.replace(/[ ]/g, "");
        let arrCookie = getCookie.split(";");
        let tips;
        for (let i = 0; i != arrCookie.length; i++) {
            let arr = arrCookie[i].split('=');
            if (key == arr[0]) {
                tips = arr[1];
                break;
            }
        }
        return tips;
    },
    delete : function(key) {
        let date = new Date();
        date.setTime(date.getTime()-10000000);
        document.cookie = key + '= ;expores=' + date.toTimeString();
    }
}










