function randomimage() {
    var pic;
	var n=Math.floor((Math.random() * 13) + 1); //Random from 1-13 included
    pic = n
    document.getElementById('myImage').src = "../images/randomChibis/"+n.toString()+".png";
}


function stars(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    width = window.innerWidth;
    canvas.width = width;
    height = window.innerHeight;
    canvas.height = height;
    
    var stars=[];
	var nstars = 500;
	for(var i = 0; i < nstars; i++)
	{
		stars.push({
			x: Math.random()*width,
			y: Math.random()*height,
			r: Math.random()*1+0.1,
		})
	}
	var t=0;
	function draw()
	{
		context.clearRect(0,0,width, height);
        context.fillStyle = "rgba(255, 255, 255, 1)";
		stars.forEach(function(s){
            //s.r = 2 + Math.floor(radius * s.z * (0.5 + Math.sin(2 * Math.PI * (t % s.t) / s.t)));
            s.r=Math.random()*5+0.1;
            s.x=Math.random()*width;
            s.y=Math.random()*height;
			context.arc(s.x, s.y, s.r, 0, Math.PI*2, true);
		});
        update();
		context.fill();
	}
 	setInterval(function(){t++;draw()}, 1000);
}