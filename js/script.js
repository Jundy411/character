const char = document.querySelectorAll(".character img");

char.forEach((e) => {
    e.addEventListener("click",function(){

        char.forEach((e,back) => {
            e.classList.remove("active");
            e.style.filter="grayscale(1)";
            
        });
        this.classList.add("active");
        this.style.filter="grayscale(0)";
        
    })
});

const text = document.querySelectorAll("ul li a");

text.forEach(e => e.addEventListener("click", function(){
    text.forEach(e => e.classList.remove("color"));
    this.classList.add("color")
}))

