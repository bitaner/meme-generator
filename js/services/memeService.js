'use strict'
var gElText = document.querySelector('.text-input').value

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: gElText.value,
        size: 20,
        align: 'left',
        color: 'red'
    }]
}


function getMemeForDisplay() {
    console.log('hello getMemeForDisplay')
    const meme = gMeme
    return meme
}

function updateMemeText() {
    console.log('hello updateMemeText')
    var elText = document.querySelector('.text-input').value
    console.log('elText', elText);
    gMeme.lines[0].txt = elText
    renderCanvas()
}

function updateMemePic(elImg) { // bug text wont clear
    console.log('hello updateMemeText', elImg.id)
    gMeme.selectedImgId = elImg.id
    renderCanvas()
}