'use strict'


// ------------------- GLOBAL VARS


var gElText = document.querySelector('.text-input').value

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: gElText.value,
        size: 40,
        align: 'center',
        margin: 'black',
        color: 'white',
        font: 'impact',
        lineHeight: 50,
        x: 250
    }, ]
}

//-------------------------------------------

function getMemeForDisplay() {
    // console.log('hello getMemeForDisplay')
    const meme = gMeme
    return meme
}


// ---------- TEXT -----------


function updateMemeText() {
    // console.log('hello updateMemeText')
    var elText = document.querySelector('.text-input').value
        // console.log('elText', elText);
    gMeme.lines[gMeme.selectedLineIdx].txt = elText
    renderCanvas()
}

function fontSize(diff) {
    // console.log('hello fontSize')
    gMeme.lines[gMeme.selectedLineIdx].size += diff
        // console.log('gMeme.lines[0].size', gMeme.lines[0].size);
}

function lineHeight(diff) {
    // console.log('hello lineHeight')
    gMeme.lines[gMeme.selectedLineIdx].lineHeight += diff
}

function newLine() {
    // console.log('hello newLine')
    createLine()
    gMeme.selectedLineIdx = (gMeme.lines.length - 1)
    gMeme.lines[gMeme.selectedLineIdx].txt = gElText.value
        // console.log('gCurrLine', gCurrLine);
}

function createLine() {
    // console.log('hello createLine')
    const line = {
        txt: gElText.value,
        size: 40,
        align: 'center',
        margin: 'black',
        color: 'white',
        font: 'impact',
        lineHeight: getLineHeight(),
        x: 250
    }
    gMeme.lines.push(line)
        // console.log('gMeme', gMeme);
}

function getMemeCurrLine() {
    // console.log('hello getMemeCurrLine')
    return gMeme.selectedLineIdx
}


//----------------


function updateMemePic(elImg) {
    // console.log('hello updateMemeText', elImg.id)
    clearTxtInput()
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    gMeme.selectedImgId = elImg.id
    renderCanvas()
}


// ---------- GET LINE HEIGHT 


function getLineHeight() {
    // console.log('hello getLineHeight')
    switch (gMeme.lines.length) {
        case 0:
            return 50
            break;
        case 1:
            return 450
            break;
        default:
            return 250
    }
}


//---------CHANGE CURR LINE FONT


function ChangeCurrLineFont(font) { // bug - when switching line need to change the currval of input to new lines-font
    // console.log('hello ChangeCurrLineFont')
    gMeme.lines[gMeme.selectedLineIdx].font = font
}


//-------- CHANGE CUUR LINE COLOR


function colorCurrLine(color, marginColor) { // bug same as change currfont
    // console.log('hello colorCurrLine')
    gMeme.lines[gMeme.selectedLineIdx].color = color
    gMeme.lines[gMeme.selectedLineIdx].margin = marginColor
}


//--------- CHANGE CURR LINE ALIGN

function alignChange(alignment) {
    // console.log('hello alignChange')
    switch (alignment) {
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].x = 50
            gMeme.lines[gMeme.selectedLineIdx].align = 'start'
            break;
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].x = 450
            gMeme.lines[gMeme.selectedLineIdx].align = 'end'
            break;
        default:
            gMeme.lines[gMeme.selectedLineIdx].x = 250
            gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    }
}


//------------- DELETE CURR LINE


function deleteCurrLine() {
    // console.log('hello deletecurrline')
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}