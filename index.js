// Code your solutions in this file
let newArray=[]

function writeCards(messages,events){
    
for ( let i =0; i < messages.length; i++)
{
    let newMessage =`Thank you, ${messages[i]}, for the wonderful ${events} gift!`
 
 newArray.push(newMessage)
}
return newArray

}

function countDown(integerGiven){
 let i = integerGiven
 while (i >= 0) {
     console.log(i--)
 }
}
