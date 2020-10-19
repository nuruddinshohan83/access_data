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