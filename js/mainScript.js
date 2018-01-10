function getLatest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var item = this.responseXML.firstChild.childNodes[1].childNodes[13];
            var title = item.childNodes[1].textContent;
            var mp3Link = item.childNodes[7].outerHTML.split("\"")[1];
            if (title.split("<").length == 1) {
                document.getElementById("latestTitle").innerHTML = "Latest Episode: " + title;
            }
            document.getElementById("latestAudio").src = mp3Link;
            document.getElementById("latestEmbed").src = mp3Link;
        }
    };
    xhttp.open("GET", "https://castbox.fm/app/castbox/rss/1093852", true);
    xhttp.send();
}
