/*
File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs= require('fs')

function clean(data){
    let a= data.split(' ')
    let cleanedData=''
    for(let i=0;i<a.length;i++){
        if(a[i]!=''){
            cleanedData+=a[i]+' '
        }
    }
    return cleanedData
}

fs.readFile('/Users/durgeshnishad/Documents/100xDevs-Cohort-Assignments/week-2/02-nodejs/files/a.txt', 'utf-8', (err, data)=>{
    data=clean(data)
    console.log(data)
})

