//NavBar側邊開合功能

var config = {
  "TPE":{
    "title":"臺北市立委(63)",
    "name":["吳思瑤","姚文智","蔣萬安","李彥秀","林昶佐","蔣乃辛","費鴻泰","賴士葆"],
    "number":["14","18","20","10","40","20","12","33"]
  },
  "OR":{
    "title":"原住民立委(7)",
    "name":["鄭天財","廖國棟","陳瑩","高金素梅","簡東明","孔文吉"],
    "number":["11","12","22","8","5","3"]
}
}



// "NTP":{
  //   "title":"不分區立委(3)",
  //   "name":["丁87中","王大明","裝傻"],
  //   "number":["11","87","999"]
  // },


function addData(self,TargetName)
{
     $('#changeLW').closest('#lblk').removeClass('hidden');
     
   
    var data = config[self.id]
    var divTarget = document.getElementById("wrapperLW");
    var htmlstr = "";
    document.getElementById("changeLW").innerHTML = data.title;
    for (var i = 0; i < data.name.length; i++) {
        var loacldataName = data.name[i];
        var loacldataNumber = data.number[i];
        htmlstr +=`<a href="b5-2-legislator.html" class="list-group-item">${loacldataName}<span class="badge badge-light">${loacldataNumber}</span></a>`
              
    }
    divTarget.innerHTML = htmlstr;
}




//tab mother 按鈕開合功能
function openCitymother(TargetID, ImageID) {

    console.log('123456');
    var x = document.getElementById(TargetID).style.display;
    if (x == "none") {

        document.getElementById(TargetID).style.display = "block";
        document.getElementById(ImageID).className = "foldeda";
    } else {

        document.getElementById(TargetID).style.display = "None";
        document.getElementById(ImageID).className = "unfoldeda";
    }


}

function openCitymotherChild(TargetIDClassGroup, TargetID, TargetSpanID) {

    var i, tabcontent, imggp, IsSame;

    IsSame = false;
    tabcontent = document.getElementsByClassName(TargetIDClassGroup);
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].style.display == "block") {
            if (tabcontent[i].id == TargetID) {
                // console.log('IsSame');
                IsSame = true;
            }
        }
        tabcontent[i].style.display = "none";
    }
    // document.getElementById(TargetID).style.display = "block";

    imggp = document.getElementsByClassName("foldedb");
    for (i = 0; i < imggp.length; i++) {
        imggp[i].className = "unfoldedb"
    }
    if (IsSame == false) {
        //console.log('LALALALALA');
        document.getElementById(TargetID).style.display = "block";
        document.getElementById(TargetSpanID).className = "foldedb"

    }

}
// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click(裡面沒東西會出錯所以關掉);
//end of tab mother

//on scroll 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goTop").style.display = "block";
    } else {
        document.getElementById("goTop").style.display = "none";
    }
}
//Scroll to Top 動畫速度
$(function() {
    // 幫 a.abgne_gotoheader 加上 click 事件
    $('a.abgne_gotoheader').click(function() {
        // 讓捲軸用動畫的方式移動到 0 的位置
        // 感謝網友 sam 修正 Opera 問題
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 800); //800滾動速度，大等於慢

        return false;
    });
});