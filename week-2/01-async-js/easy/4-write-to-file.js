/*
Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/


const fs= require('fs')
let data= "hi, im durgesh"
fs.writeFile('/Users/durgeshnishad/Documents/100xDevs-Cohort-Assignments/week-2/02-nodejs/files/a.txt', data, 'utf-8', (err)=>{
    if(err)
        throw err
})

