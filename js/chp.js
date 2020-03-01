
$(document).ready(function(){
    var arraychp=[],num=0,times=0;
  
    console.log("ready");
    $(".last").attr("disabled",true);

    //  定义抓取数据函数
    function getchp(){
        $.ajax({
            type:"get",
            async:false,
            url:"https://chp.shadiao.app/kong.php?encode=json",
            dataType:"jsonp",
            jsonp:"callback",
           
            success:function(json){ 
                data=json["data"][0]["chp"];
                $("#item").text(data);
                arraychp.push(data);
                console.log(times+data);
                times+=1;
            }, 

            
        });
    }
    
    //  打开页面自动调用函数
    $(getchp());

    //  上一条
    $(".last").click(function(){
               
        console.log("num:"+num);
        
        if(num < times-1){
            console.log(arraychp[times-2-num]);
            $("#item").text(arraychp[times-2-num]);
            num+=1;

        }else{
            $(".last").attr("disabled",true);
            alert("NO MORE!");
            num=0;
            
        };  
    
    });

    
    
    // 再来一条
    $(".next").click(function(){
        
        getchp();
        $(".last").attr("disabled",false);
    
    });
      
        
        

})
        
    
