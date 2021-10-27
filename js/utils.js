'use strict'

function makeId(length = 6) {
    var txt = ''
    var possible = 'QWETRYUIOPASDFHJKLZXCVBNM1234567890qwerytuiopasdfghjklzxcvbnm!@#$%^&*'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}