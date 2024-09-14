const containerE1 = document.querySelector(".container");
const creates = ["Student", "web developer", "freelancer", "Instructor"];
let characterIndex = 0;
let careerIndex = 0
updateText();
function updateText() {
    characterIndex++
  containerE1.innerHTML = `<h1>I am a ${creates[careerIndex].slice(
    0,
    characterIndex
  )}</h1>`;
  
if(characterIndex === creates[careerIndex].length){
    careerIndex++;
    characterIndex=0;
}
setTimeout(updateText,400)
}

