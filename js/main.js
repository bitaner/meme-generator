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
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(meme)
            // markCurrLine(x, y, text)
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
    meme.lines.forEach(line => {
        var text = line.txt
        if (!text) text = ''
        gCtx.font = `${line.size}px ${line.font}`
        const x = gElCanvas.width / 2
        const y = line.lineHeight
        gCtx.lineWidth = meme.lineWidth;
        gCtx.strokeStyle = line.margin
        gCtx.fillStyle = line.color
        gCtx.textAlign = line.align
        gCtx.fillText(text, x, y);
        gCtx.strokeText(text, x, y);
        markCurrLine(x, y, text)
    });

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

function onnewLine() {
    console.log('hello newLine')
        // saveCurrLine()
        // gCtx.save()
    newLine()
    clearTxtInput()
        // clearCanvas()
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

// work with lineIdx not gcurline

function markCurrLine(x, y, text) {
    console.log('hello markCurrLine')
    const meme = getMemeForDisplay()
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect((x - (gCtx.measureText(text).width / 2) - 10), (y - meme.lines[gCurrLine].size), (gCtx.measureText(text).width + 20), (meme.lines[gCurrLine].size + 10))
}

// -------- CLEAR CANVAS ---------- //

function clearCanvas() { // didnt use yet
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height / 4)
}

// -------------------------------

function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    console.log(mainMenu);
    mainMenu.classList.toggle('open');
}


// -------------- TOGGLE EDITOR ------------
function example() {
    console.log('hello example')
}

function toggleMemeEditor(elImg) {
    console.log('hello toggleMemeEditor')
    document.body.classList.toggle('open-meme-editor')
        // model:
    updateMemePic(elImg)
        // dom:
    renderCanvas()
}

function hideMemeEditor() {
    console.log('hello hideMemeEditor')
    document.body.classList.toggle('open-meme-editor')
}