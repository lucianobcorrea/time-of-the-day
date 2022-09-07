let time = document.getElementById("current-time")

let d = new Date()
time.innerHTML = "Agora são " + d.toLocaleTimeString()

setInterval(() => {
    d = new Date()
    time.innerHTML = "Agora são " + d.toLocaleTimeString()
}, 1000);

setInterval(() => {
    let img = document.getElementById("current-img")

    let background = document.getElementsByTagName("body")[0]

    if(d.getHours() >= 6 && d.getHours() <= 11) {
        img.src = "C:/Users/lucia/Documents/vsCodeProjects/HoraDoDia/images/Morning.png"
        background.setAttribute("style", "background: rgba(251, 200, 104, 0.979)")
    }else if(d.getHours() >= 12 && d.getHours() <= 17) {
        img.src = "C:/Users/lucia/Documents/vsCodeProjects/HoraDoDia/images/Afternoon.png"
        background.setAttribute("style", "background: rgba(98, 115, 159, 0.979)")
    }else if(d.getHours() >= 18 && d.getHours() <= 23) {
        img.src = "C:/Users/lucia/Documents/vsCodeProjects/HoraDoDia/images/Night.png"
        background.setAttribute("style", "background: rgba(68, 68, 81, 0.979)")
    }else {
        img.src = "C:/Users/lucia/Documents/vsCodeProjects/HoraDoDia/images/Dawn.png"
        background.setAttribute("style", "background: rgba(37, 48, 66, 0.979)")
    }
}, 1);