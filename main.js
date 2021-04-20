var reason=["Dad","Mom","Me","Brother"];
var images=["https://image.shutterstock.com/image-vector/cartoon-dad-vector-clip-art-260nw-142692979.jpg","https://image.shutterstock.com/image-vector/working-mom-260nw-158801597.jpg","https://i.pinimg.com/originals/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRympIumHSkw8eSkamkR2bfLrN9X2Jn1OTdr2OpWK-Ghjvj0HxyE0ZuPhkch8mES9kYWAg&usqp=CAU"];
var i=0;
function change(){
  if(i<=3){
    document.getElementById("reasontext").innerHTML=reason[i];
    document.getElementById("album").src=images[i];
    i++;
  }
}