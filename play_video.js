let videoElement = [];
let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
var n_particles = 2;

function setup() {
  //noCanvas();
    createCanvas(windowWidth, windowHeight);
    onVideoLoad();
}

function onVideoLoad() {
  
  for(let i=0;i < n_particles;i++){
    
   x[i] = random(0, windowWidth);
   y[i] = random(0, windowHeight);
   
   xSpeed[i] = random(-0.2,0.2);
   ySpeed[i] = random(-0.1,0.3);
   
  videoElement[i] = createVideo(['video/video_3.mp4']); 
  
  videoElement[i].elt.setAttribute('autoplay', "");
  videoElement[i].elt.setAttribute('loop', "");
  videoElement[i].elt.setAttribute('muted', "");
  //videoElement[i].elt.setAttribute('playsinline', "");
  videoElement[i].elt.setAttribute('webkit-playsinline', "");
  
  videoElement[i].position(x[i], y[i], 'fixed');
  //videoElement[i].autoplay();
  //videoElement[i].loop();
  videoElement[i].volume(0);
  videoElement[i].size(windowWidth/50, windowWidth/50);
  //videoElement[i].elt.setAttribute('width', windowWidth/20);
  //videoElement[i].elt.setAttribute('volume', '0');
  
  }
}

  function draw() {
  background('#0f0f0f');
  

  for(let i = 0;i < n_particles;i++) {
    muove();
   
    videoElement[i].position(x[i], y[i], 'fixed');
    
     joinParticles(videoElement);
  }

 
}


function muove(){
  for(let i=0;i < n_particles;i++){
      if(x[i] < 0 || x[i] > width)
      xSpeed[i]*=-1;
    if(y[i] < 0 || y[i] > height)
      ySpeed[i]*=-1;
    x[i]+=xSpeed[i];
    y[i]+=ySpeed[i];
  }

}


// this function creates the connections(lines)
// between particles which are less than a certain distance apart
function  joinParticles(videoElement) {
    videoElement.forEach(element =>{
        for(let i=0;i < n_particles;i++){
      let dis = dist(x[i],y[i],element.x,element.y);
      if(dis<485) {
        stroke('rgba(255,255,255,0.02)');
        line(x[i],y[i],element.x,element.y);
      }
        }
    });
  
}
