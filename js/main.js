'use strict'

// -------------------global vars -----------------------

var gKeywords = { 'happy': 12, 'funny puk': 1 } // didnt use yet
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['happy'] }]; // didnt use yet
var gImg
var gCtx
var gElCanvas

//-------------------------------------------------------


function onInit() {
    console.log('hello onInit')
    renderCanvas()
}


// -------------------- RENDER CANVAS ------------------

function renderCanvas() {
    console.log('hello renderCanvas')
    const meme = getMemeForDisplay()
    console.log('meme', meme);
    gElCanvas = document.getElementById('main-canvas');
    gCtx = gElCanvas.getContext('2d');
    var img = new Image();
    img.src = `img/${gMeme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(meme)
    };
}


//---------------------- IMG INPUT --------------------- 


function drawImg() {
    const meme = getMemeForDisplay()
    var img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText()
    };
}


// ---------------------- TEXT --------------------------

function drawText(meme) {
    var text = meme.lines[0].txt
    if (!text) text = ''
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


// -------- CLEAR CANVAS ---------- //

function clearCanvas() { // didnt use yet
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height / 4)
}

// -------------------------------