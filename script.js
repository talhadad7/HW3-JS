    
        const btn=document.getElementById("Welcome");
        const music =document.getElementById("welcomeMusic");
           let isPlaying = false;
        window.addEventListener("load", () => {
        music.play();             
        isPlaying = true;     
        btn.textContent = "Pause Music"; 
        });
       btn.addEventListener("click", () => {
        if (!isPlaying) {
            music.play();
            btn.textContent = "Pause Music";
            isPlaying = true;
        } 
        else {
            music.pause();
            btn.textContent = "Play Music";
            isPlaying = false;
        }

    });
    
    document.querySelectorAll(".Animal-container").forEach(container=>{
         const audio = new Audio(container.dataset.sound);
        container.addEventListener("click",()=>{
            audio.play();
        })
       
    })

    document.addEventListener("keydown",(event)=>{
        const keyPressed = event.key.toLowerCase();
        const container = document.querySelector(`.Animal-container[data-key="${keyPressed}"]`);
        if (!/^[a-zא-ת]$/.test(keyPressed)) {
         return;
}
        if (!container) {
          alert("אין חיה כזאת!");
            return;
        }
        container.click();
    

    })
  