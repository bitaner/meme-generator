'use strict'

// -------------------global vars -----------------------

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['happy'] }];
var gImg
var gCtx
var gElCanvas

//-------------------------------------------------------


function onInit() {
    console.log('hello onInit')
    gElCanvas = document.getElementById('main-canvas');
    gCtx = gElCanvas.getContext('2d');
    drawImg2()
}


//----------------------img input--------------------- 


function drawImg2() {
    var img = new Image();
    img.src = `img/${gMeme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    };
}

// ---------------------- TEXT --------------------------

function drawText() {
    var text = gMeme.lines[0].txt
    gCtx.font = '48px impact';
    const x = gElCanvas.width / 2
    const y = 50
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

// Add text input to the HTML and dynamically take the text line value from 
// the input to gMeme and from it to the Canvas