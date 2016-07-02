//changing radius :)
var deradius=3;
var setradius = function(radius){
    deradius = radius;
};
var getradius = document.getElementById("radiusrange");
getradius.addEventListener('change',showsizeradius,false);

function showsizeradius(){
    var i = document.getElementById("radiusvalue");
    i.innerHTML = this.value;
    setradius(this.value);
}


 