$(window).on("load", function() {
    $("body").removeClass("preload")
})

let final = "dont click again."
let stage = 0

function rickRoll() {
    console.log(stage)
    if (stage == 0) {
        stage = 1

        document.getElementById("rickroll").style.fontSize = "2rem"

        let curr = "weewoo."

        const d = setInterval(() => {

            if (curr == "" && stage == 1) {
                stage = 2
            } else if (curr.length == final.length) {
                stage = 3
                return clearInterval(d)
            }
            
            console.log(curr)

            if (stage == 1) {
                document.getElementById("rickroll").innerText = curr.substr(0, curr.length - 1)
                curr = curr.substr(0, curr.length - 1)
            } else if (stage == 2) {
                document.getElementById("rickroll").innerText = final.substr(0, curr.length + 1)
                curr = final.substr(0, curr.length + 1)
            }
        }, 50)
        return
    } else if (stage == 3) {
        stage = 4
        const player = document.getElementById("video")
        document.getElementById("vidSource").src = "assets/r1ck.mp4";
        player.load()
        document.getElementById("rickroll").innerText = "warned u :/"
        setTimeout(() => {
            document.getElementById("rickroll").innerText = "hey ur still here, check me out: tekoh.wtf"
            stage = 5
        }, 5000)
    } else if (stage == 5) {
        window.location.replace("https://tekoh.wtf")
    }
}