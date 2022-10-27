const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click',function(){
    //get random number b/w  0 and 3
    const rand1 =getRandomnumbers();
    const rand2 =getRandomnumbers();
    const rand3 =getRandomnumbers();
    document.body.style.backgroundColor="rgba("+rand1+","+rand2+","+rand3+")";
    color.textContent="rgba("+rand1+","+rand2+","+rand3+")";
});

function getRandomnumbers(){
    return Math.floor(Math.random()*256);
}