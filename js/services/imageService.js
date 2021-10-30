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
    {
        id: 6,
        url: 'img/6.jpg',
        keywords: ['stoned', 'aliens', 'funny', 'weird']
    },
    {
        id: 7,
        url: 'img/7.jpg',
        keywords: ['happy', 'baby', 'surprized', 'cute']
    },
    {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['wonka', 'tell me more', 'sarcasm', 'man']
    },
    {
        id: 9,
        url: 'img/9.jpg',
        keywords: ['what would you do', 'haim hecht', 'pointing']
    },
    {
        id: 10,
        url: 'img/10.jpg',
        keywords: ['happy', 'success', 'great', 'cheers', 'leo', 'man']
    },
    {
        id: 11,
        url: 'img/11.jpg',
        keywords: [, 'morphius', 'what if i told you', 'matrix', 'man']
    },
    {
        id: 12,
        url: 'img/12.jpg',
        keywords: ['man', 'lotr', 'one does not simply', 'boromir']
    },

    {
        id: 13,
        url: 'img/13.jpg',
        keywords: ['putin', 'peace', 'man', 'president']
    },
    {
        id: 14,
        url: 'img/14.jpg',
        keywords: ['everywhere', 'toy', 'buzz', 'woody']
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