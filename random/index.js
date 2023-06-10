const fs = require('fs')



fs.writeFileSync("add/bio.txt","Hello Word")

fs.appendFileSync("add/bio.txt","Content added at end")


const data = fs.readFileSync("add/bio.txt","utf8")
console.log(data)


fs.renameSync("add/bio.txt","add/hihello.txt")
fs.unlinkSync("add/hihello.txt",(err)=>{
    if(err)
    {
        console.log(`It can't be done ${e}`)
    }
    else{
        console.log("File Deleted Successfully")
    }
})

fs.rmdirSync("add")