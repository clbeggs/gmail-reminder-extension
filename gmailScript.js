
    var promise = new Promise(function(resolve,reject){
        var checkExists = setInterval( function () {
          if( document.getElementsByClassName("bkH").length > 0 || document.getElementsByClassName("ams").length > 0 ){
              clearInterval(checkExists);
              resolve(true);
          }
    },100);

    });

    promise.then(function(value){
    var newAbsDiv = document.createElement("div");

    var message = document.createTextNode("Be sure to include any attachments!!")
    newAbsDiv.appendChild(message)
    newAbsDiv.style.cssText = 'position:absolute;top:10px;right:300px;font-size:35px;font-weight:bold;border:solid 9px blue;border-radius:30px;width:550px;height:100px;text-align:center;z-index:100;'
    
    
    
    function hashHandler() {
        console.log('The hash has changed!');
        var urlCurr = window.location.href
        var compose = urlCurr.match(/compose=new/)
        console.log(compose)
        if(compose.length != null ){
            document.body.appendChild(newAbsDiv);
        }    
      }
    
      window.addEventListener('hashchange', hashHandler, false);


      function displayRed(){
        document.body.appendChild(newAbsDiv);
        newAbsDiv.style.borderColor = "red";
        console.log("ASASDASDASDASDASDASDASDASDASD")
      }


      let replyButId = document.getElementsByClassName("bkH");
      replyButId[0].addEventListener("click", function(){
        displayRed()
      });
    
    });


