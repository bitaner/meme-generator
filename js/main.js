'use strict'

// -------------------global vars -----------------------

var gKeywords = { 'happy': 12, 'funny puk': 1 } // didnt use yet
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['happy'] }]; // didnt use yet
var gImg
var gCtx
var gElCanvas
var gCurrLine = 0

//-------------------------------------------------------


function onInit() {
    // console.log('hello onInit')
    renderCanvas()
}


// -------------------- RENDER CANVAS ------------------


function renderCanvas() {
    // console.log('hello renderCanvas')
    const meme = getMemeForDisplay()
        // console.log('meme', meme);
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
    var text = meme.lines[gCurrLine].txt
    if (!text) text = ''
    gCtx.font = `${meme.lines[gCurrLine].size}px ${meme.lines[gCurrLine].font}`
    const x = gElCanvas.width / 2
    const y = meme.lines[gCurrLine].lineHeight
    gCtx.lineWidth = meme.lineWidth;
    gCtx.strokeStyle = meme.lines[gCurrLine].margin
    gCtx.fillStyle = meme.lines[gCurrLine].color
    gCtx.textAlign = meme.lines[gCurrLine].align
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function onFontSize(diff) {
    // console.log('hello onFontSize')
    fontSize(diff)
    renderCanvas()
}

function onLineHeight(diff) {
    // console.log('hello onLineHeight')
    lineHeight(diff)
    renderCanvas()
}

// new line not done

function onnewLine() {
    // console.log('hello newLine')
    newLine()
    clearTxtInput()
    renderCanvas()
}

function clearTxtInput() {
    // console.log('hello clearTxtInput')
    document.querySelector('.text-input').value = ''
}

function getCurrLine() {
    gCurrLine = getMemeCurrLine()
    console.log('hello getCurrLine', gCurrLine)
}

// -------- CLEAR CANVAS ---------- //

function clearCanvas() { // didnt use yet
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height / 4)
}

// -------------------------------