$(document).ready(function(){
    $("img.lazy").lazyload();
    failure_limit : 20;
    
})
$(document).ready(function(){

    var headTan=$(".headTan");
    var headList=$(".head .right li").first().nextAll();
        headList.each(function(i){    
        headList.eq(i).hover(function(){
            $(this).css({"color":"#0085d0","background":"#fff"})
            $(this).children(":last").css("display","block")
        },function(){
            $(this).children(":last").css("display","none")
            $(this).css({"color":"#333","background":"#f8f8f8"})
        })
     })


    // 
    var close=$(".close");
    var img00=$(".headB");
    close.eq(0).click(function(){
        img00.eq(0).css({"height":0})
        $(".headB a").first().eq(0).css({"height":0})
        $(".headB a").first().children("img").eq(0).css({"height":0})

    })
})
$(document).ready(function(){
// banner
    // 选项卡
    var navList=$(".liebiao_box ul li")
    // console.log(navList)
    navList.each(function(i){
        navList.eq(i).hover(function(){
            $(this).children(":first").css({"color":"#0085d0","background":"#fbfbfb"})
            $(this).children(":last").css("display","block")
        },function(){
            $(this).children(":last").css("display","none")
            $(this).children(":first").css({"color":"#6F676C","background":"#333"})
        })
     })

    // 轮播
    
    var n=0;
    var flag=true;
    var bnImgs=$(".listUl li");
    var banner=$("#banner");
    var bnBtnL=$(".bnBtnL");
    var bnBtnR=$(".bnBtnR");
    var bnList=$(".bannerBot li i");
    var bnSpan=$(".bannerBot li .span");
    var m=0;

    // console.log(bnItem)
    var tt=setInterval(moveL,2000);
    
    function moveL(){
    	    
    	if(n==0&n==1){
    	    	bnSpan.eq(1).css({"display":"none"})
    	}	
        
        n++;
        if(n>=bnImgs.length){
            n=0;
        } 
        console.log(n)
        bnImgs.css({display:"none",opacity:"0.75"}).eq(n).css("display","block").animate({opacity:1},500,function(){
            flag=true;

        });  
       
        bnList.css({"background":"#fff"}).eq(n).css({"background":"#c00"});
        
     }
     function moveR(){
        n--;
        if(n<0){
            n=bnImgs.length-1;
        }  
        bnImgs.css({display:"none",opacity:"0.75"}).eq(n).css("display","block").animate({opacity:1},500,function(){flag=true});  
        bnList.css({"background":"#fff"}).eq(n).css({"background":"#c00"}) 
     }
    banner.hover(function(){
        clearInterval(tt);       
     },function(){
        tt=setInterval(moveL,2000);
     })
     // btn
      bnBtnL.click(function(){
        if(flag){
         flag=false;
         moveR();
        }
       
     })
     bnBtnR.click(function(){
        if(flag){
          flag=false;
        moveL();
        }
     })
      // 
    /* bnList.mouseover(function(){
        var index=$(this).index();
        console.log($(this).eq(3))
         bnImgs.css({display:"none",opacity:"0.75"}).eq(index).css("display","block").animate({opacity:1},500);  
         bnList.css({"background":"#fff"}).eq(index).css({"background":"#c00"}) 
     }) */



})
$(document).ready(function(){
// 猜你喜欢
    var refresh=$(".like_top-right");
    var likeList=$(".like_bottom ul")
    var nn=0;
    /*console.log(refresh);
    console.log(likeList);*/
    refresh.eq(0).click(function(){
        nn++;
        if(nn>=likeList.length){
            nn=0;
        } 
        likeList.css("display","none").eq(nn).css("display","block")
    })
})
$(document).ready(function(){
// 楼层选项卡

    function sSelect(floorNav,selList,selConlist){
        selList.hover(function(){
        var index=$(this).index();
         /*console.log($(this))
         console.log(index)*/
         // console.log(selList.eq(index).children())
         selList.children().css({"background":"#fff","color":"#333333"}).end().eq(index).children().css({"background":"#535353","color":"#fff"})
         selConlist.removeClass("cRfirst").eq(index).addClass("cRight cRfirst")
     },function(){})
    }

     var floorNav=$(".floorNav").eq(0)
     var selList=$("li",$(".fList",floorNav)) ;
     var selConlist=$(".cRight",$(".floorCon").eq(0)) 
     sSelect(floorNav,selList,selConlist)

     var floorNav=$(".floorNav").eq(1)
     var selList=$("li",$(".fList",floorNav)) ;
     var selConlist=$(".cRight",$(".floorCon").eq(1)) 
     sSelect(floorNav,selList,selConlist)

     var floorNav=$(".floorNav").eq(2)
     var selList=$("li",$(".fList",floorNav)) ;
     var selConlist=$(".cRight",$(".floorCon").eq(2)) 
     sSelect(floorNav,selList,selConlist)

     var floorNav=$(".floorNav").eq(3)
     var selList=$("li",$(".fList",floorNav)) ;
     var selConlist=$(".cRight",$(".floorCon").eq(3)) 
     sSelect(floorNav,selList,selConlist)

     var floorNav=$(".floorNav").eq(4)
     var selList=$("li",$(".fList",floorNav)) ;
     var selConlist=$(".cRight",$(".floorCon").eq(4)) 
     sSelect(floorNav,selList,selConlist)
    
})

$(document).ready(function(){
// 小banner轮播
    function sLunbo(fBanner,fImgs,fBlist,fBtnL,fBtnR){
        var t=setInterval(move1,2000);
        var n=0;
        var flag=true;
        function move1(){
        n++;
        if(n>=fImgs.length){
            n=0;
        }  
        fImgs.css({display:"none",opacity:"0.75"}).eq(n).css("display","block").animate({opacity:1},500,function(){flag=true});  
        fBlist.css({"background":"#3e3e3e"}).eq(n).css({"background":"#b61b1f"})
     }
     function move2(){
        n--;
        if(n<0){
            n=fImgs.length-1;
        }  
        fImgs.css({display:"none",opacity:"0.75"}).eq(n).css("display","block").animate({opacity:1},500,function(){flag=true});  
        fBlist.css({"background":"#3e3e3e"}).eq(n).css({"background":"#b61b1f"}) 
     }
     fBanner.hover(function(){
        clearInterval(t);
        fBtnL.css("display","block")
        fBtnR.css("display","block")
     },function(){
        t=setInterval(move1,2000);
        fBtnL.css("display","none")
        fBtnR.css("display","none")

     })
     // btn
     fBtnL.click(function(){
        if(flag){
         flag=false;
         move2();
        }
       
     })
     fBtnR.click(function(){
        if(flag){
          flag=false;
         move1();
        }
     })
     // 
     fBlist.mouseover(function(){
        var index=$(this).index();
        console.log(index)
         fImgs.css({display:"none",opacity:"0.75"}).eq(index).css("display","block").animate({opacity:1},500);  
         fBlist.css({"background":"#3e3e3e"}).eq(index).css({"background":"#b61b1f"}) 
     }) 

 }
 // F1
     var fBanner=$(".fBanner").eq(0);
     var fImgs=$("a",fBanner)
     var fBlist=$("li",$(".fBlist").eq(0))
     var fBtnL=$(".fBtnL").eq(0);
     var fBtnR=$(".fBtnR").eq(0);
     sLunbo(fBanner,fImgs,fBlist,fBtnL,fBtnR);
     
     var fBanner=$(".fBanner").eq(1);
     var fImgs=$("a",fBanner)
     var fBlist=$("li",$(".fBlist").eq(1))
     var fBtnL=$(".fBtnL").eq(1);
     var fBtnR=$(".fBtnR").eq(1);
     sLunbo(fBanner,fImgs,fBlist,fBtnL,fBtnR);

     var fBanner=$(".fBanner").eq(2);
     var fImgs=$("a",fBanner)
     var fBlist=$("li",$(".fBlist").eq(2))
     var fBtnL=$(".fBtnL").eq(2);
     var fBtnR=$(".fBtnR").eq(2);
     sLunbo(fBanner,fImgs,fBlist,fBtnL,fBtnR);

     var fBanner=$(".fBanner").eq(3);
     var fImgs=$("a",fBanner)
     var fBlist=$("li",$(".fBlist").eq(3))
     var fBtnL=$(".fBtnL").eq(3);
     var fBtnR=$(".fBtnR").eq(3);
     sLunbo(fBanner,fImgs,fBlist,fBtnL,fBtnR);

     var fBanner=$(".fBanner").eq(4);
     var fImgs=$("a",fBanner)
     var fBlist=$("li",$(".fBlist").eq(4))
     var fBtnL=$(".fBtnL").eq(4);
     var fBtnR=$(".fBtnR").eq(4);
     sLunbo(fBanner,fImgs,fBlist,fBtnL,fBtnR);
 
})

$(document).ready(function(){
	//楼层跳转
    var junmpList=$(".junmpList li");
    var floor=$(".floor");
    var floorTop0=floor.eq(0).offset().top;
    var now;
    var floorTop;
    $(window).scroll(function(){
        var objT=$(document).scrollTop();
        if(objT>=floorTop0-400){
            $(".junmp").css({"display":"block"});
        }
        if(objT<floorTop0-400){
            $(".junmp").css({"display":"none"});
        }
        //颜色
        for(var i=0;i<$(".floor").length;i++){
           if(objT>$(".floor").eq(i).offset().top-250){
               $("span",junmpList).css("color","#333").eq(i).css("color","#c00");
               $("h2",junmpList).css("color","#333").eq(i).css("color","#c00");
            }
        }
  
	})
  // hover
        junmpList.hover(function(){
             $("span",junmpList).eq($(this).index()).css("color","#c00");
             $("h2",junmpList).eq($(this).index()).css("color","#c00");

        },function(){
        	 $("span",junmpList).eq($(this).index()).css("color","#333");
             $("h2",junmpList).eq($(this).index()).css("color","#333");
        })
       
     //点击楼层跳转   	
	 junmpList.click(function(){
           var index=$(this).index();
           $(document.body).animate({scrollTop:$(".floor").eq(index).offset().top-100})
           $("span",junmpList.eq(0)).css("color","#333");
           $("span",junmpList.eq(index)).css("color","#c00");
            $("h2",junmpList.eq(0)).css("color","#333");
           $("h2",junmpList.eq(index)).css("color","#c00");
	  })
	
    jQuery.extend({
			backTop:function(obj,time){
				obj.on("click",function(){
					var top=$(window).scrollTop();
					var scr={aa:top};
					$(scr).animate({aa:0},{
						duration:time,
						step:function(){
						$(window).scrollTop(scr.aa);	
						}
					})
				})
			}
		})
		jQuery.backTop($(".jpre"),300);
		jQuery.backTop($(".qita li:nth-child(4) .icon"),300);
})

$(document).ready(function(){

})