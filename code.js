function preload()
{

}

function setup()
{
    canvas = createCanvas(800, 560);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,250,150,300,300);
    /*fill('#00FF00');
    rect(20,20,15,1000);
    rect(20,20,1000,15);
    rect(1000,20,15,1000);
    rect(1000,20,1000,15);
    fill('#FF0000');
    stroke('#FFA500');*/
    fill(255, 0, 0); 
    stroke(255, 0, 0); 
    circle(50, 50, 80); 
    circle(50, 500, 80); 
    circle(730, 50, 80); 
    circle(730, 500, 80);
    fill(0, 128, 0); 
    stroke(0, 128, 0); 
    rect(90, 40, 600, 20); 
    rect(90, 490, 600, 20); 
    rect(40, 90, 20, 370); 
    rect(720, 90, 20, 370);
}