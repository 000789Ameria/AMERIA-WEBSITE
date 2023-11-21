document.getElementById('btn') function changeLang() {
    var language = getCookie("lang");
    if (test == "en") {
        setCookie("lang", "es", 365);
        window.location.reload();
    } else {
        setCookie("lang", "en", 365);
        window.location.reload();
    }    
}
  

