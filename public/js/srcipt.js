const lp = document.querySelector('.landingpage')
console.log(lp)
const lpOption= {
    root: null,
    rootMargin: '0px',
    threshold: .5
  
}
const lpObserver = new IntersectionObserver(function(entries,lpObserver){
    entries.forEach(entry=>{
        if(entry.isIntersecting)
        {
            console.log("landing page is visible")
            lp.classList.add('bganimation');
        }
        else {
            console.log("landing page is not visible")
            lp.classList.remove('bganimation');
        }
    })
},lpOption)
lpObserver.observe(lp)



let preBtn = document.querySelector("#pre")
let nextBtn = document.querySelector("#next")
let slider = document.querySelector(".reviewSlider")

let childNum = slider.childElementCount;
slider.style.width = ""+(childNum*33.33) +"%"

let nextCounter = 0;

let childWidth = 100/childNum;

console.log(childNum);
console.log(slider)
preBtn.addEventListener("click",()=>{
  

})
nextBtn.addEventListener("click",()=>{
    console.log("next btn clicked")
    nextCounter++;
    console.log(childWidth)
    slider.style.transform = "translateX(-"+(childWidth*nextCounter)+"%)"
})
