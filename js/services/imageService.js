'use strict'

// ------------------- GLOBAL VARS


var gKeywords = { 'happy': 12, 'trump': 1 } // create a map for this from all gimgs.keywords
var gImgs = [{
        id: 1,
        url: 'img/1.jpg',
        keywords: ['trump', 'poitics', 'angry', 'man']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['happy', 'dog', 'puppy', 'animals', 'fluffy', 'cute']
    },
    {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['happy', 'baby', 'dog', 'puppy', 'sleep', 'cute', 'calm', 'animal']
    },
    {
        id: 4,
        url: 'img/4.jpg',
        keywords: ['happy', 'cat', 'sleep', 'cute', 'calm', 'animal']
    },
    {
        id: 5,
        url: 'img/5.jpg',
        keywords: ['happy', 'baby', 'success', 'great', 'cute']
    },

]; // didnt use yet
var gImg // didnt use yet
var gCurrKeyWord


//-------------------------------------------


function updateKeyWord(keyWord) {
    if (keyWord === 'all') keyWord = '';
    gCurrKeyWord = keyWord;
    // increaseWordRate(searchWord);
}


//------------- SEARCH IMGS BY KEY -------------


function onKeySearch(ev) {
    console.log('hello onKeySearch')
    ev.preventDefault();
    const KeyWord = document.querySelector('.search-bar').value;
    document.querySelector('.search-bar').value = '';
    updateKeyWord(KeyWord);
    renderGallery();
}


// -------------- RENDER GALLERY -----------


function renderGallery() {
    console.log('hello renderGallery')
    let Imgs = getImgsForDisplay()
    let strHtml = ''
        // REMOVE
        // '<div class="file-input-container img-item"><h2>Choose your own image!</h2><input type="file" class="img-item file-input btn" name="image" onchange="onImgInput(event)"/></div>'
    strHtml += Imgs
        .map((img) => {
            return `<img src="${img.url}" alt="" class="grid-img" id="${img.id}" onclick="toggleMemeEditor(this)">`
        }).join('')
    document.querySelector('.gallery-grid-container').innerHTML = strHtml
        // renderKeyWords()
}


// -------------- GET IMAGES FOR DISPLAY ------


function getImgsForDisplay() {
    console.log('hello getImgsForDisplay')
    const keyWord = gCurrKeyWord
    if (!keyWord) return gImgs
    return gImgs.filter((img) => img.keywords.includes(keyWord))
}


// ---------------- TOGGLE KEY WORDS MENU ----------


// function onToggleShowKeyWords() {
//     console.log('hello onToggleShowKeyWords')
//     document.body.classList.toggle('more-menu');
// }