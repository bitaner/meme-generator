'use strict'

// -------------------global vars -----------------------


var gCtx
var gElCanvas = document.getElementById('main-canvas')
var gCurrLine = 0


//-------------------------------------------------------


function onInit() {
    console.log('hello onInit')
    renderGallery()
        // will load from storage : meme bank, added imgs, stickers maybe
}


// -------------------- RENDER CANVAS ------------------


function renderCanvas() {
    console.log('hello renderCanvas')
    const meme = getMemeForDisplay()
        // console.log('meme', meme);
    gElCanvas = document.getElementById('main-canvas')
    gCtx = gElCanvas.getContext('2d')
    var img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(meme)
        markCurrLine()
    };
}


//---------------------- IMG INPUT --------------------- 


function drawImg() {
    const meme = getMemeForDisplay()
    var img = new Image()
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
    };
}


// ---------------------- TEXT FUNCS --------------------------


function drawText(meme) {
    meme.lines.forEach(line => {
        var text = line.txt
        if (!text) text = ''
        gCtx.font = `${line.size}px ${line.font}`
        const x = line.x
        const y = line.y
        gCtx.lineWidth = meme.lineWidth;
        gCtx.strokeStyle = line.margin
        gCtx.fillStyle = line.color
        gCtx.textAlign = line.align
        gCtx.fillText(text, x, y)
        gCtx.strokeText(text, x, y)
            // markCurrLine(x, y, text)
    });
}

function onFontSize(diff) {
    // console.log('hello onFontSize')
    fontSize(diff)
    markCurrLine()
    renderCanvas()
}

function onLineHeight(diff) {
    // console.log('hello onLineHeight')
    lineHeight(diff)
    renderCanvas()
}

function onSwitchLine() {
    // console.log('hello SwitchLine')
    const meme = getMemeForDisplay()
    if (!meme.lines.length) return
    if (meme.selectedLineIdx === (meme.lines.length - 1)) {
        meme.selectedLineIdx = 0
    } else {
        meme.selectedLineIdx += 1
    }
    clearTxtInput()
    renderCanvas()
}

function onNewLine() {
    // console.log('hello onNewLine')
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
        // console.log('hello getCurrLine', gCurrLine)
}

function markCurrLine() {
    // console.log('hello markCurrLine')
    const meme = getMemeForDisplay()
    const x = meme.lines[meme.selectedLineIdx].x
    const y = meme.lines[meme.selectedLineIdx].y
    const text = meme.lines[meme.selectedLineIdx].txt
    gCtx.strokeStyle = 'black'
    gCtx.setLineDash([10, 10])
    if (meme.lines[meme.selectedLineIdx].align === 'center') {
        gCtx.strokeRect((x - (gCtx.measureText(text).width / 2) - 10), (y - meme.lines[gCurrLine].size + 7), (gCtx.measureText(text).width + 20), (meme.lines[gCurrLine].size))
    } else if (meme.lines[meme.selectedLineIdx].align === 'start') {
        gCtx.strokeRect((x - 10), (y - meme.lines[gCurrLine].size + 7), (gCtx.measureText(text).width + 20), (meme.lines[gCurrLine].size))

    } else if (meme.lines[meme.selectedLineIdx].align === 'end') {
        gCtx.strokeRect(((x - 10) - gCtx.measureText(text).width), (y - meme.lines[gCurrLine].size + 7), (gCtx.measureText(text).width + 20), (meme.lines[gCurrLine].size))

    }
    gCtx.setLineDash([])
}

function onChangeFont(font) {
    // console.log('hello onChangeFont', font)
    ChangeCurrLineFont(font)
    renderCanvas()
}

function onColorIt() {
    // console.log('hello onColorIt')
    var color = document.querySelector('[name=color]').value;
    var marginColor = document.querySelector('[name=margin-color').value
    setColorButtonsBGC(color, marginColor)
    colorCurrLine(color, marginColor)
    renderCanvas()
}

function onAlignChange(align) { /// bug with square
    // console.log('hello onAlignChange')
    const alignment = align.id
    alignChange(alignment)
    renderCanvas()
}


// --------  DELETE CURRLINE ---------- //


function onDeleteCurrLine() {
    // console.log('hello onDeleteCurrLine')
    deleteCurrLine()
    renderCanvas()
}


// --------------TOGGLE MENU    -----------------


function toggleMenu() {
    // console.log('toggleMenu')
    var elMainMenu = document.getElementById('mainMenu')
    elMainMenu.classList.toggle('open')
}


// -------------- TOGGLE EDITOR ------------


function toggleMemeEditor(elImg) {
    // console.log('hello toggleMemeEditor')
    document.body.classList.toggle('open-meme-editor')
    document.querySelector('.gallery-main-container').classList.toggle('hide-gallery')
        // elGallery.style.display = 'none'
    if (window.innerWidth <= 740) {
        document.querySelector('footer').classList.toggle('footer-opacity')
    }
    // model:
    updateMemePic(elImg)
        // dom:
    renderCanvas()
}

function hideMemeEditor() {
    // console.log('hello hideMemeEditor')
    document.body.classList.toggle('open-meme-editor')
    document.querySelector('.gallery-main-container').classList.toggle('hide-gallery')
    if (window.innerWidth <= 740) {
        document.querySelector('footer').classList.toggle('footer-opacity')
    }
}


//------------- DOWNLOAD MEME -------------


function downloadCanvas(elLink) { // bug with square
    const data = gElCanvas.toDataURL()
        // console.log('data', data);
    elLink.href = data
}


// ------------- CHANGE COLOR CONTORLERS BGC --- 

function setColorButtonsBGC(color, marginColor) {
    console.log('hello setColorButtonsBGC')
    var elColorBTN = document.querySelector('.control-color')
    var elBGCBTN = document.querySelector('.control-margin-c')
    elColorBTN.style.background = color
    elBGCBTN.style.background = marginColor
}