$(function() { 
    $("form .rectangle").on("focus blur", function(event){
    //    console.log(event.handleObj.type )
        if(event.handleObj.type === "focus"){
            $(this).css({
                "border":"2px solid #666666",
                "borderRight":"none",
                "transition":"0.3s"
                
            });
            $(".cta").css({
                "border":"2px solid #666666",
                "borderLeft":"none",
                "backgroundColor": "#DBDBDB",
                "transition":"0.3s"
            });
            // $(".cta").click(function(){
            //     e.preventDefault();
            // });
            $(".rectangle").on("input", function(event){
               let email = $(this).val();
               if(email.length > 0){
                    $(".rectangle").css({
                        "border":"2px solid #FBAD18",
                        "borderRight":"none",
                    });
                    $(".cta").css({
                        "border":"2px solid #FBAD18",
                        "borderLeft":"none",
                        "backgroundColor": "#FBAD18"
                    });
               } else{
                    $(this).css({
                        "border":"2px solid #666666",
                        "borderRight":"none",
                        "transition":"0.3s"
                        
                    });
                    $(".cta").css({
                        "border":"2px solid #666666",
                        "borderLeft":"none",
                        "backgroundColor": "#DBDBDB",
                        "transition":"0.3s"
                    });
               }
                

            });
            $(".error").css("display","none");
        } else{
            $(this).removeAttr("style");
            $(".cta").removeAttr("style");
        }
    });


    function validateEmail(email) {         
          let caractersInvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return caractersInvalid.test(email);
      }
      function validate(event){
        event.preventDefault();
        let email = $(".rectangle").val();

        if(email.length <= 0){
            console.log("Nada digitado");
        } else{
            if (validateEmail(email)) {
                $.ajax({
                    url: "http://localhost:3333/newsletter",
                    type: 'POST',
                    contentType: "application/json",
                    
                    data: JSON.stringify({
                        email: email,
                      }),
                });
            }else {
                
                $(".rectangle").css({
                    "border":"2px solid #FBAD18",
                    "borderRight":"none",
                });
                $(".cta").css({
                    "border":"2px solid #FBAD18",
                    "borderLeft":"none",
                    "backgroundColor": "#FBAD18"
                });
                $(".error").fadeIn("slow").css("display","flex");
            }
        }
       
        return false;
      }
      $("form").bind("submit", validate);
      $("[name='button-cta']").click(function(event){
       

      });

});
    
