function getLatest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var item = this.responseXML.querySelector("item");
            var title = item.querySelector("title").textContent;
            var desc = item.querySelector("description").textContent;
            var mp3Link = item.querySelector("enclosure").getAttribute("url");
            document.getElementById("latestTitle").textContent = "Latest Episode: " + title.replace(/</g, '&lt').replace(/>/g, '&gt').replace(/\"/g, '&quot');
            document.getElementById("latestDesc").textContent = desc.replace(/</g, '&lt').replace(/>/g, '&gt').replace(/\"/g, '&quot');
            document.getElementById("latestAudio").setAttribute("src", mp3Link);
            document.getElementById("latestEmbed").setAttribute("src", mp3Link);
        }
    };
    xhttp.open("GET", "https://castbox.fm/app/castbox/rss/1093852", true);
    xhttp.send();
}
