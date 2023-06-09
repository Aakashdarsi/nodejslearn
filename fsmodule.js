const fs = require('fs')
// To create a new file


fs.writeFileSync("dummy.txt","Melonisa Hurrahhh")
// To append the data
fs.appendFileSync("dummy.txt","This is a file adding method so we need to do the things")
const buffer_data = fs.readFileSync("dummy.txt")

console.log(buffer_data.toString())


// rename a file

fs.renameSync("dummy.txt","namechanged.txt")