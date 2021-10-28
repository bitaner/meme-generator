'use strict'
var gElText = document.querySelector('.text-input').value

/// check vars!!!!!!!!!!!


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
            lineHeight: 50
        },
        {
            txt: gElText.value,
            size: 40,
            align: 'center',
            margin: 'black',
            color: 'white',
            font: 'impact',
            lineHeight: 450
        }
    ]
}


function getMemeForDisplay() {
    // console.log('hello getMemeForDisplay')
    const meme = gMeme
    return meme
}

function example() {
    console.log('hello example')
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
    console.log('hello newLine')
    if (gMeme.lines.length < 2) { createLine() }
    (gMeme.selectedLineIdx === 0) ? gMeme.selectedLineIdx = 1: gMeme.selectedLineIdx = 0
    getCurrLine()
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
        lineHeight: 450
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
    clearTxtInput()
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
        // console.log('hello updateMemeText', elImg.id)
    gMeme.selectedImgId = elImg.id
    renderCanvas()
}