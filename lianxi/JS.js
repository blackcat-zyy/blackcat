window.onload=function () {
    var sinput = document.querySelectorAll('.c div .search input');
    var sdiv = document.querySelector('.c div div div');
    var si = document.querySelector('.search i');
    sinput[0].onmouseover=function () {
        for (var i=0;i<sinput.length;i++){
            sinput[i].style.border='1px solid rgba(0,0,0,.5)';
        }
    };
    sinput[1].onmouseover=function () {
            sinput[1].style.background='#ff6700';
            si.style.color='white'
    };
    sinput[1].onmouseout=function () {
        sinput[1].style.background='';
        si.style.color=''
    };
    sinput[0].onfocus=function () {
        sdiv.style.display='block';
        for (var i=0;i<sinput.length;i++){
            sinput[i].style.border='1px solid #ff6700';
        }
    };
    sinput[0].onblur=function () {
        sdiv.style.display='none';
    };
    sinput[0].onmouseout=function () {
        for (var i=0;i<sinput.length;i++){
            sinput[i].style.border='1px solid #b0b0b0';
        }
    };

    var cli = document.querySelectorAll('.cl li');
    var cbot = document.querySelector('.cbot');
    var cbotul = document.querySelectorAll('.cbot div ul');
    for (var j=0;j<cli.length-2;j++){
        cli[j].index=j;
        cli[j].onmouseover=function () {
            cbot.style.display='block';
            cbotul[this.index].style.display='block';
        }
        cli[j].onmouseout=function () {
            cbot.style.display='none';
            cbotul[this.index].style.display='none';
        }
    }
    var bLi = document.querySelectorAll('.banner li');
    var nLi = document.querySelectorAll('.number li');
    var length = nLi.length;
    var timer = null;
    var index = 0;
    function autoplay(){
        ++index;
        if(index >= length){
            index = 0;
        }
        update(index);
    }
    function update(num){
        for(var j=0;j<length;j++){
            bLi[j].style.display = 'none';
            nLi[j].className = '';
        }
        bLi[num].style.display = 'block';
        nLi[num].className = 'active';
    }
    timer = setInterval(autoplay,3000);
    for(var i=0;i<length;i++){
        nLi[i].index = i;
        bLi[i].onmouseover = function(){
            clearInterval(timer);
        };
        nLi[i].onclick = function(){
            clearInterval(timer);
            index = this.index;
            update(this.index);
        };
        bLi[i].onmouseout = function(){
            timer = setInterval(autoplay,3000);
        }
    }

    var leftd = document.querySelectorAll('.leftd li');
    var rightd = document.querySelectorAll('.rightl div');
    for (var l=0;l<leftd.length;l++){
        leftd[l].index=l;
        leftd[l].onmouseover=function () {
            for (var n=0;n<leftd.length;n++){
                rightd[n].style.display='none';
            }
            leftd[this.index].style.background='#ff6700';
            rightd[this.index].style.display='flex';
        }
        leftd[l].onmouseout=function () {
            for (var n=0;n<leftd.length;n++){
                rightd[n].style.display='none';
            }
            leftd[this.index].style.background='';
        }
    }

    var Mfslr = document.querySelectorAll('.Mfs>div>a');
    var Mfsimg = document.querySelector('.Mfsimg ul');
    var a =0;
    Mfslr[0].onclick=function () {
        a++;
        if (a<=0){
            Mfsimg.style.left=992*a+'px';
        }else{
            a=0
        }
    };
    Mfslr[1].onclick=function () {
        a--;
        if (a<-1){
            a=-1
        }
        Mfsimg.style.left=992*a+'px';
    };

    var time = setInterval(function () {

        var clock = document.querySelectorAll('.clock div div');
        var hour = clock[0].innerHTML.replace(/^0/,'');
        var minute = clock[1].innerHTML.replace(/^0/,'');
        var second = clock[2].innerHTML.replace(/^0/,'');
        var lasttime = parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);
        lasttime--;
        var getHour = parseInt(lasttime / 3600);
        var getMin = parseInt(lasttime % 3600 / 60);
        var getSecond = parseInt(lasttime % 3600 % 60);

        if (getHour < 10) getHour = '0' + getHour;
        if (getMin < 10) getMin = '0' + getMin;
        if (getSecond < 10) getSecond = '0' + getSecond;

        clock[2].innerHTML = getSecond;
        clock[1].innerHTML = getMin;
        clock[0].innerHTML = getHour;

        if(lasttime < 0){
            clearInterval(time)
        }

    },1000);

    var hot1 = document.querySelectorAll('#hot1 li');
    var hot1a = document.querySelectorAll('#hot1 li a');
    var ul1 = document.querySelectorAll('#Al1 ul');
    for (var h = 0;h<hot1.length;h++){
        hot1[h].index=h;
        hot1[h].onmouseover=function () {
            for (var g=0;g<hot1.length;g++) {
                ul1[g].style.display='none';
                hot1[g].style.borderBottom='2px solid white';
                hot1a[g].style.color='black';
            }
            ul1[this.index].style.display='block';
            hot1[this.index].style.borderBottom='2px solid #ff6700';
            hot1a[this.index].style.color='#ff6700';
        }
    }
    var hot2 = document.querySelectorAll('#hot2 li');
    var hot2a = document.querySelectorAll('#hot2 li a');
    var ul2 = document.querySelectorAll('#Al2 ul');
    for (var u = 0;u<hot2.length;u++){
        hot2[u].index=u;
        hot2[u].onmouseover=function () {
            for (var g=0;g<hot2.length;g++) {
                ul2[g].style.display='none';
                hot2[g].style.borderBottom='2px solid white';
                hot2a[g].style.color='black';
            }
            ul2[this.index].style.display='block';
            hot2[this.index].style.borderBottom='2px solid #ff6700';
            hot2a[this.index].style.color='#ff6700';
        }
    }
    var hot3 = document.querySelectorAll('#hot3 li');
    var hot3a = document.querySelectorAll('#hot3 li a');
    var ul3 = document.querySelectorAll('#Al3 ul');
    for (var o = 0;o<hot3.length;o++){
        hot3[o].index=o;
        hot3[o].onmouseover=function () {
            for (var g=0;g<hot3.length;g++) {
                ul3[g].style.display='none';
                hot3[g].style.borderBottom='2px solid white';
                hot3a[g].style.color='black';
            }
            ul3[this.index].style.display='block';
            hot3[this.index].style.borderBottom='2px solid #ff6700';
            hot3a[this.index].style.color='#ff6700';
        }
    }
    var hot4 = document.querySelectorAll('#hot4 li');
    var hot4a = document.querySelectorAll('#hot4 li a');
    var ul4 = document.querySelectorAll('#Al4 ul');
    for (var p = 0;p<hot4.length;p++){
        hot4[p].index=p;
        hot4[p].onmouseover=function () {
            for (var g=0;g<hot4.length;g++) {
                ul4[g].style.display='none';
                hot4[g].style.borderBottom='2px solid white';
                hot4a[g].style.color='black';
            }
            ul4[this.index].style.display='block';
            hot4[this.index].style.borderBottom='2px solid #ff6700';
            hot4a[this.index].style.color='#ff6700';
        }
    }
    var hot5 = document.querySelectorAll('#hot5 li');
    var hot5a = document.querySelectorAll('#hot5 li a');
    var ul5 = document.querySelectorAll('#Al5 ul');
    for (var f = 0;f<hot5.length;f++){
        hot5[f].index=f;
        hot5[f].onmouseover=function () {
            for (var g=0;g<hot5.length;g++) {
                ul5[g].style.display='none';
                hot5[g].style.borderBottom='2px solid white';
                hot5a[g].style.color='black';
            }
            ul5[this.index].style.display='block';
            hot5[this.index].style.borderBottom='2px solid #ff6700';
            hot5a[this.index].style.color='#ff6700';
        }
    }

    var reca = document.querySelectorAll('.recommend>div:nth-child(2) a');
    var recul = document.querySelector('.rec ul');
    var b=0;
    reca[0].onclick=function () {
        b++;
        if (b<=0){
            recul.style.left=1240*b+'px';
        }else{
            b=0
        }
    };
    reca[1].onclick=function () {
        b--;
        if (b<-3){
            b=-3
        }
        recul.style.left=1240*b+'px';
    };
    
    var lrspan1 = document.querySelectorAll('#books span');
    var boul1 = document.querySelector('#books ul');
    var boli1 = document.querySelectorAll('#books>div ul li');
    var c = 0;
    lrspan1[0].onclick=function () {
        c++;
        if (c<=0){
            boul1.style.left=296*c+'px';
        }else{
            c=0
        }
        for (var g=0;g<boli1.length;g++) {
            boli1[g].style.background='rgb(176, 176, 176)';
            boli1[g].style.border='2px solid white';
        }
        boli1[-c].style.background='white';
        boli1[-c].style.border='2px solid #ffac13';
    };
    lrspan1[1].onclick=function () {
        c--;
        if (c<-2){
            c=-2
        }
        boul1.style.left=296*c+'px';
        for (var g=0;g<boli1.length;g++) {
            boli1[g].style.background='rgb(176, 176, 176)';
            boli1[g].style.border='2px solid white';
        }
        boli1[-c].style.background='white';
        boli1[-c].style.border='2px solid #ffac13';
    };
    for (var d=0;d<boli1.length;d++){
        boli1[d].index=d;
        boli1[d].onclick=function () {
            c=-this.index;
            boul1.style.left=296*c+'px';
            for (var g=0;g<boli1.length;g++) {
                boli1[g].style.background='rgb(176, 176, 176)';
                boli1[g].style.border='2px solid white';
            }
            boli1[this.index].style.background='white';
            boli1[this.index].style.border='2px solid #ffac13';
        }
    }

    var lrspan2 = document.querySelectorAll('#theme span');
    var boul2 = document.querySelector('#theme ul');
    var boli2 = document.querySelectorAll('#theme>div ul li');
    var e = 0;
    lrspan2[0].onclick=function () {
        e++;
        if (e<=0){
            boul2.style.left=296*e+'px';
        }else{
            e=0
        }
        for (var g=0;g<boli2.length;g++) {
            boli2[g].style.background='rgb(176, 176, 176)';
            boli2[g].style.border='2px solid white';
        }
        boli2[-e].style.background='white';
        boli2[-e].style.border='2px solid #ffac13';
    };
    lrspan2[1].onclick=function () {
        e--;
        if (e<-3){
            e=-3
        }
        boul2.style.left=296*e+'px';
        for (var g=0;g<boli2.length;g++) {
            boli2[g].style.background='rgb(176, 176, 176)';
            boli2[g].style.border='2px solid white';
        }
        boli2[-e].style.background='white';
        boli2[-e].style.border='2px solid #ffac13';
    };
    for (var q=0;q<boli2.length;q++){
        boli2[q].index=q;
        boli2[q].onclick=function () {
            e=-this.index;
            boul2.style.left=296*e+'px';
            for (var g=0;g<boli2.length;g++) {
                boli2[g].style.background='rgb(176, 176, 176)';
                boli2[g].style.border='2px solid white';
            }
            boli2[this.index].style.background='white';
            boli2[this.index].style.border='2px solid #ffac13';
        }
    }

    var lrspan3 = document.querySelectorAll('#game span');
    var boul3 = document.querySelector('#game ul');
    var boli3 = document.querySelectorAll('#game>div ul li');
    var w = 0;
    lrspan3[0].onclick=function () {
        w++;
        if (w<=0){
            boul3.style.left=296*w+'px';
        }else{
            w=0
        }
        for (var g=0;g<boli3.length;g++) {
            boli3[g].style.background='rgb(176, 176, 176)';
            boli3[g].style.border='2px solid white';
        }
        boli3[-w].style.background='white';
        boli3[-w].style.border='2px solid #ffac13';
    };
    lrspan3[1].onclick=function () {
        w--;
        if (w<-3){
            w=-3
        }
        boul3.style.left=296*w+'px';
        for (var g=0;g<boli3.length;g++) {
            boli3[g].style.background='rgb(176, 176, 176)';
            boli3[g].style.border='2px solid white';
        }
        boli3[-w].style.background='white';
        boli3[-w].style.border='2px solid #ffac13';
    };
    for (var r=0;r<boli3.length;r++){
        boli3[r].index=r;
        boli3[r].onclick=function () {
            w=-this.index;
            boul3.style.left=296*w+'px';
            for (var g=0;g<boli3.length;g++) {
                boli3[g].style.background='rgb(176, 176, 176)';
                boli3[g].style.border='2px solid white';
            }
            boli3[this.index].style.background='white';
            boli3[this.index].style.border='2px solid #ffac13';
        }
    }


    var lrspan4 = document.querySelectorAll('#apply span');
    var boul4 = document.querySelector('#apply ul');
    var boli4 = document.querySelectorAll('#apply>div ul li');
    var t = 0;
    lrspan4[0].onclick=function () {
        t++;
        if (t<=0){
            boul4.style.left=296*t+'px';
        }else{
            t=0
        }
        for (var g=0;g<boli4.length;g++) {
            boli4[g].style.background='rgb(176, 176, 176)';
            boli4[g].style.border='2px solid white';
        }
        boli4[-t].style.background='white';
        boli4[-t].style.border='2px solid #ffac13';
    };
    lrspan4[1].onclick=function () {
        t--;
        if (t<-3){
            t=-3
        }
        boul4.style.left=296*t+'px';
        for (var g=0;g<boli4.length;g++) {
            boli4[g].style.background='rgb(176, 176, 176)';
            boli4[g].style.border='2px solid white';
        }
        boli4[-t].style.background='white';
        boli4[-t].style.border='2px solid #ffac13';
    };
    for (var y=0;y<boli4.length;y++){
        boli4[y].index=y;
        boli4[y].onclick=function () {
            t=-this.index;
            boul4.style.left=296*t+'px';
            for (var g=0;g<boli4.length;g++) {
                boli4[g].style.background='rgb(176, 176, 176)';
                boli4[g].style.border='2px solid white';
            }
            boli4[this.index].style.background='white';
            boli4[this.index].style.border='2px solid #ffac13';
        }
    }


    var video = document.querySelectorAll('.video a');
    var curtain = document.querySelector('.curtain');
    var close = document.querySelector('.title span');
    var play = document.querySelectorAll('.content video');
    var alert = document.querySelector('.alert');
    for (var z=0;z<video.length;z++){
        video[z].index=z;
        video[z].onclick=function () {
            alert.style.display='block';
            curtain.style.display='block';
            play[this.index].style.display='block'
        };
        close.onclick=function () {
            for (var q=0;q<video.length;q++){
                alert.style.display='none';
                play[q].style.display='none'
                curtain.style.display='none';
            }
        }
    }
};