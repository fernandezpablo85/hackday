function replyToMessage(msg) {
  if (msg.name === "loadconnect") {  
    var elem = top.document.getElementById("B2634929-2D9C-4cda-8185-3E62CCD6E309");
    if (!elem) {
      var url = window.location;
      var title = document.title;
      
      var inHolder = top.document.createElement("iframe");
      inHolder.id = "B2634929-2D9C-4cda-8185-3E62CCD6E309";
      inHolder.src = "http://localhost:4567/?url=" + url + "&title=" + title;
      //inHolder.src = "http://www.altavista.com";
      inHolder.style.position = "fixed";
      inHolder.style.top = "40%";
      inHolder.style.left = "40%";
      inHolder.style.zIndex = 999;
      inHolder.style.width = "300px";
      inHolder.style.height = "200px";    
      top.document.body.insertBefore(inHolder, top.document.body.firstChild);
    }
  }
}
safari.self.addEventListener("message", replyToMessage, false);