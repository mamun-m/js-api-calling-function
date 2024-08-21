// confirm box start 

const firstfunction =()=>{
const heading=confirm('are you agree for delete :');

if (heading) {
   console.log('deleted')
} else {
  console.log('not a delete ')
}
}
firstfunction();

// confirm box ends


// second section is start

const secondfunction =()=>{
let h1=document.createElement('h1');
let text;
let name=prompt('Enter your characters : ');
if (name === null || name === "" ) {
  text = 'no name found '
} else {
  text=name;
}
let textDecoration=document.createTextNode(text);
h1.appendChild(textDecoration);
document.body.appendChild(h1)

}
secondfunction();


// second section is ends