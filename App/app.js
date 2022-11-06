let canvas = new fabric.Canvas("canvas");
let clear = document.getElementById("clear");
let rectangle = document.getElementById("rectangle");
let ellipse = document.getElementById("ellipse");
let convert = document.getElementById("convert");
let success = document.getElementById("success");
let isEllipse = false;
let isRectangle = false;

let circle, isDown, origX, origY;

// rectangle
document.querySelector(rectangle).addEventListener("click", () => {
isEllipse = false;
isRectangle = true;
console.log("rectangle");
});

// ellipse
document.querySelector(ellipse).addEventListener("click", () => {
    isEllipse = true;
    isRectangle = false;
    console.log("ellipse");
});

// Clear
document.querySelector(clear).addEventListener("click", () => {
    let objects = canvas.getObjects();
    for (let i = 0; i < objects.length; i++) {
      canvas.remove(objects[i]);
    }
    canvas.renderAll();
});

// Convert
document.querySelector(convert).addEventListener("click", async function () {
    let mySvg = canvas.toSVG();
    let response = await fetch("http://127.0.0.1:3000/", {
      method: "POST",
      body: mySvg,
    }).then(function (response) {
      alert("SVG Converted");
    });
});