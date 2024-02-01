const change = () => {
    let color = {
        1: "#ff0000",
        2: "#0000ff",
        3: "#00ff00",
        4: "#ffff00",
        5: "#800080",
        6: "#ffa500",
        7: "#ff69b4",
        8: "#a52a2a",
        9: "#00ffff",
        10: "#808080",
        11: "#ffd700"
    }
    let random = Math.floor(Math.random() * 11) + 1;
    console.log(random)
    document.querySelector("body").style.backgroundColor = color[random];
}