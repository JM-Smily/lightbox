/**
 * Created by seraphimwx on 2017/11/23.
 */
function lightBox(id) {
    var num ;
    var last = $("#"+id+" figure").length;
    $("body").append("<div class='modal'>" +
        "<span id='close'>&times;</span>" +
        "<div class='page'><img id='prev' src='img/toPre.png'>" +
        "<img id='next' src='img/toNext.png'></div></div>");
    $(".modal").hide();

    $("#"+id+" figure").each(function (index,obj) {
        $(obj).attr("num",index);
        $(obj).click(function () {
            $(".modal").show();
            $(".modal").append("<img src='' class='imgbox'>");
            var a = $(this).find("img").eq(0).attr("src");
            $(".imgbox").attr("src",a);
            num = $(this).eq(0).attr("num");
        })
    })
    //显示模态框
    $("#"+id+" figure").click(function () {
        $(".modal").show();
    })
    //关闭模态框
    $("#close").click(function () {
        $(".modal").hide();
    })
    //上一张
    $("#prev").click(function () {
        num--;
        for(var i =0;i<last;i++){
            var a = $("#"+id+" figure").eq(i).attr("num");
            if(num<0){
                num=0;
            }
            if(a==num){
                $(".modal").show();
                var b = $("#"+id+" figure").eq(i).find("img").eq(0).attr("src");
                $(".imgbox").attr("src",b);
            }
        }
    })

    //下一张
    $("#next").click(function () {
        num++;
        for(var i =0;i<last;i++){
            var a = $("#"+id+" figure").eq(i).attr("num");
            if(num>last){
                num=last;
            }
            if(a==num){
                $(".modal").show();
                var b = $("#"+id+" figure").eq(i).find("img").eq(0).attr("src");
                $(".imgbox").attr("src",b);
            }
        }
    })

}