const keys = document.querySelectorAll('.key');

window.addEventListener("keydown",function(e){
     const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
     if(!audio){
        return;
     }
     audio.CurrentTime = 0;
     audio.play();
})
keys.class(B).add("playing");
this.window.setTimeout(function(){
   document.body.style.color= "yellow";
},3000)

keys.forEach(key => key.addEventListener('transitionend' ,removeTransition));
function removeTransition(e){
   if(e.propertyName !== 'transform') return;
   e.target.classList.remove('playing');
}
