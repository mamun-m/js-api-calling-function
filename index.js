const button=document.querySelector("button");
const p=document.querySelector("p")
button.addEventListener("click", function startclock (){
      let date =new Date();
      let hours =date.getHours();
      let mintes=date.getMinutes();
      let seconds=date.getSeconds();
           mintes=countfunction(mintes);
           seconds=countfunction(seconds);
      let times=hours + ":" +mintes+":"+seconds;

      p.textContent=times;
     
setInterval(startclock, 1000)
})

const countfunction =(value)=>{
      if (value < 10) {
         value = "0" +value
      }
      return value;
}