noseX=0;
noseY=0;

function preload()
{

clownnose=loadImage("https://i.postimg.cc/2yzWrbx3/clownnose.png");
clownwig=loadImage("https://i.postimg.cc/DZVyKSTs/pngaaa-com-2031076.png")

}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw()
{

    image(video,0,0,300,300);
    image(clownnose,noseX,noseY,30,30)
   
    

};

function gotPoses(results){
    if (results.length>0){
        console.log(results);
       noseX=results[0].pose.nose.x-12;
       noseY=results[0].pose.nose.y-12;
       headX=results[0].pose.nose.x-50;
       headY=results[0].pose.nose.y-100;
        console.log("The X value of nose is"+ results[0].pose.nose.x);
        console.log("The Y value of nose is"+ results[0].pose.nose.y);

        
    }
}

function takesnapshot()
{
save("filterpic.png");
};