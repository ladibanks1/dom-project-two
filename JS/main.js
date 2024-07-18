document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color-box");
    const btn = document.getElementById("change-color-btn");
    function getRandomColor() {
        const pallet = [
            "#FF0000", // Red
            "#00FF00", // Lime
            "#0000FF", // Blue
            "#FFFF00", // Yellow
            "#FF00FF", // Fuchsia
            "#00FFFF", // Aqua
            "#FFA500", // Orange
            "#800080", // Purple
            "#008000", // Green
            "#000080", // Navy
            "#FFC0CB", // Pink
            "#FFD700", // Gold
            "#A52A2A", // Brown
            "#808080", // Gray
            "#FF8080",
            "#000000", // Black
            "#00CED1", // DarkTurquoise
            "#8B0000", // DarkRed
            "#BDB76B", // DarkKhaki
            "#6B8E23"  // OliveDrab
        ];
        const random = Math.floor(Math.random() * pallet.length)
        return pallet[random];
    }
    btn.addEventListener("click" , function(){
        getRandomColor()
        colorBox.style.backgroundColor = getRandomColor();
    })
})
