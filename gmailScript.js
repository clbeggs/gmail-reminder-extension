




var newAbsDiv = document.createElement("div");

var message = document.createTextNode("Be sure to include any attachments!!")
newAbsDiv.appendChild(message)
newAbsDiv.style.cssText = 'position:absolute;top:10px;right:300px;font-size:35px;font-weight:bold;border:solid 9px blue;border-radius:30px;width:550px;height:100px;text-align:center;z-index:100;'



function hashHandler() {
    //User has clicked compose new email
    var urlCurr = window.location.href
    var compose = urlCurr.match(/compose=new/)
    console.log(compose)
    if(compose.length != null ){
        document.body.appendChild(newAbsDiv);
    }    
  }
    
    window.addEventListener('hashchange', hashHandler, false); //In the event that the URL is changed, when user clicks compose new email, a small string is added to end of URL.
   
   
    var promise = new Promise(function(resolve,reject){
        /*This promise is for when the user is replying to an email*/
        var checkExists = setInterval( function () {
            //Wait until reply button has loaded.
          if( document.getElementsByClassName("bkH").length > 0 || document.getElementsByClassName("ams").length > 0 ){
              clearInterval(checkExists);
              resolve(true);
          }
    },100);

    });

    promise.then(function(value){ 
        //reply button has loaded. wait until its clicked 

      function displayRed(){
        document.body.appendChild(newAbsDiv);
        newAbsDiv.style.borderColor = "red"
      }


      let replyButId = document.getElementsByClassName("bkH");
      replyButId[0].addEventListener("click", function(){
        displayRed()
      });
    
    });


