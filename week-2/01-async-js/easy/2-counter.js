/* Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

//Method 1:
const flag= true
let i=1;
while(flag){
    console.clear()
    console.log(i)
    i++
}

//Method 2

let i=1
function counter(){
    console.clear()
    console.log(i)
    i++
    setTimeout(counter, 1000)
}
counter()








































































//(Hint: setTimeout)