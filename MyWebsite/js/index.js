function randomimage() {
    var pic;
	var n=Math.floor((Math.random() * 10) + 1); //Random from 1-10 included
    pic = n
    document.getElementById('myImage').src = "../images/randomChibis/"+n.toString()+".png";
}

