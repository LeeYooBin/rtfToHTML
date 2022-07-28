const rtfToHTML = require('@iarna/rtf-to-html')
const parseRTF = require('rtf-parser')
const fs = require('fs')

rtfToHTML.fromStream(fs.createReadStream('example.rtf'), (err, html) => {
    console.log(html)
})

// parseRTF.stream(fs.createReadStream('example.rtf'), (err, doc) => {
//     console.log(doc)
// })