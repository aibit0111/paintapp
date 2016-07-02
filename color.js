var getcolor = document.getElementById("fillcolor");
getcolor.addEventListener('change',setcolor,false);

function setcolor(){
    context.strokeStyle= this.value;
     context.fillStyle = this.value;
    
}