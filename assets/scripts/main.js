  
/// Variabii globali
var keys = {};
keys.LEFT = 37;
keys.RIGHT = 39;
keys.SPACE = 32;
var fire = true;
var fire2 = true;
var score=0;
var count=0;
document.body.onkeyup = document.body.onkeydown = function(e){
var kc = e.keyCode || e.which;
keys[kc] = e.type == 'keydown';
var l=1;
var r=1;
};

/// Variabili posizione
var character = {
x: window.scrollX + document.getElementById('player').getBoundingClientRect().left,
y: window.scrollY + document.getElementById('player').getBoundingClientRect().top-(document.getElementById('player').getBoundingClientRect().top/74),
element: document.getElementById("player")
};

//collisione laser player
function distance(element1, element2){
  var x1 = element1.getBoundingClientRect().left + element1.width/2;
  var x2 = element2.getBoundingClientRect().left + element2.width/2;
  var y1 = element1.getBoundingClientRect().top + element1.height/2;
  var y2 = element2.getBoundingClientRect().top + element2.width/2;
  return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}
function distanceX(element1,element2){
  var x1 = element1.getBoundingClientRect().left;
  var x2 = element2.getBoundingClientRect().left;
  return Math.abs(x2-x1);
}
function distanceY(element1, element2){
  var y1 = element1.getBoundingClientRect().top;
  var y2 = element2.getBoundingClientRect().top;
  return Math.abs(y2-y1);
}

//sparo nemico
function enemyshoot(){
  var player = document.getElementById("player");
  setInterval(function(){
        var invaderlist = document.getElementsByClassName('nemesi');

          number = Math.round(Math.random() * invaderlist.length);
 
        var imglaser = new Image(10,20);
      imglaser.classList.add("laser");
      imglaser.style.top= invaderlist[number].getBoundingClientRect().top+30+"px";
      imglaser.style.left= invaderlist[number].getBoundingClientRect().left+15+"px";


      imglaser.src = '../assets/images/game/laser2.png';
      document.body.appendChild(imglaser);
      setInterval(function(){
      imglaser.style.top = imglaser.getBoundingClientRect().top + 'px';
      if(Math.sqrt(Math.pow((character.x-imglaser.getBoundingClientRect().left+player.width/2),2)+Math.pow((character.y-imglaser.getBoundingClientRect().top + player.height/2),2)) < 40)
      {
       window.location.href = '../game/lose.html';
      }
      if(imglaser.style.top>document.documentElement.clientHeight-40+"px")
        {
        imglaser.remove();
        } 
    }, 1000/24);
    }, 600);
 
  }


/// player movement
var moveCharacter = function(dx, dy){
character.x += dx||0;
character.y += dy||0;
character.element.style.left = character.x + 'px';
character.element.style.top = character.y + 'px';
};


/// player movement control
var detectCharacterMovement = function(){
if ( keys[keys.LEFT] && document.getElementById('player').getBoundingClientRect().left > document.documentElement.clientHeight/6) {
moveCharacter(-10);
}
if ( keys[keys.RIGHT] && document.getElementById('player').getBoundingClientRect().left < document.documentElement.clientHeight*1.8) {
moveCharacter(10);
}

//player control buttons
chleft = function(){
    moveCharacter(-10);
}

chright = function(){
   moveCharacter(10);
}

chfire = function(){
  if(fire)
  {
    fire=false;
    setTimeout(() => {
      fire=true;
    }, 200);
    var img = new Image(10, 20);
    img.classList.add("laser");
    img.style.top=document.getElementById('player').getBoundingClientRect().top+"px";
    img.style.left=document.getElementById('player').getBoundingClientRect().left+20+"px";
    img.src = '../assets/images/game/laser.png';
    document.body.appendChild(img);
    var count = 0;
    var spaceships = document.getElementsByClassName('nemesi');
    const interval = setInterval(function(){
      for(var i = 0; i<spaceships.length; i++){
        if(distance(img,spaceships[i])< spaceships[i].width/2){
          img.remove();
          spaceships[i].className = "hit";
          score++;
          if(score==45)
          {
            window.location.href = '../game/win.html';
          }
          clearInterval(interval);
          break;
        }
      }
      count++;
      img.style.top = img.getBoundingClientRect().top - 20 + 'px';
      if(count/24 > 4){
        img.remove();
        clearInterval(interval);
      }
    },1000/24)
}

}
//Fire!
if (keys[keys.SPACE]){
    if(fire)
    {
      fire=false;
      setTimeout(() => {
        fire=true;
      }, 200);
      var img = new Image(10, 20);
      img.classList.add("laser");
      img.style.top=document.getElementById('player').getBoundingClientRect().top+"px";
      img.style.left=document.getElementById('player').getBoundingClientRect().left+20+"px";
      img.src = '../assets/images/game/laser.png';
      document.body.appendChild(img);
      var count = 0;
      var spaceships = document.getElementsByClassName('nemesi');
      const interval = setInterval(function(){
        for(var i = 0; i<spaceships.length; i++){
          if(distance(img,spaceships[i])< spaceships[i].width/2){
            img.remove();
            spaceships[i].className = "hit";
            score++;
            if(score==45)
            {
              window.location.href = '../game/win.html';
            }
            clearInterval(interval);
            break;
          }
        }
        count++;
        img.style.top = img.getBoundingClientRect().top - 20 + 'px';
        if(count/24 > 4){
          img.remove();
          clearInterval(interval);
        }
      },1000/24)
  }
} 
}


/// game loop
setInterval(function(){
  
detectCharacterMovement();
}, 1000/24);

//movimento alieni+gameover
var id = null;
function Invadermove() {
  enemyshoot();
  //prima wave!
  var elem1 = document.getElementById("Invader1");
  var elem2 = document.getElementById("Invader2");
  var elem3 = document.getElementById("Invader3");
  var elem4 = document.getElementById("Invader4");
  var elem5 = document.getElementById("Invader5");
  var elem6 = document.getElementById("Invader6");
  var elem7 = document.getElementById("Invader7");
  var elem8 = document.getElementById("Invader8");
  var elem9 = document.getElementById("Invader9");
  var elem10 = document.getElementById("Invader10");
  var elem11= document.getElementById("Invader11");
  var elem12= document.getElementById("Invader12");
  var elem13= document.getElementById("Invader13");
  var elem14= document.getElementById("Invader14");
  var elem15 = document.getElementById("Invader15");
  //seconda wave!
  var elem16 = document.getElementById("Invader16");
  var elem17 = document.getElementById("Invader17");
  var elem18 = document.getElementById("Invader18");
  var elem19 = document.getElementById("Invader19");
  var elem20 = document.getElementById("Invader20");
  var elem21= document.getElementById("Invader21");
  var elem22= document.getElementById("Invader22");
  var elem23 = document.getElementById("Invader23");
  var elem24 = document.getElementById("Invader24");
  var elem25 = document.getElementById("Invader25");
  var elem26= document.getElementById("Invader26");
  var elem27 = document.getElementById("Invader27");
  var elem28 = document.getElementById("Invader28");
  var elem29 = document.getElementById("Invader29");
  var elem30 = document.getElementById("Invader30");
  //seconda wave!
  var elem31 = document.getElementById("Invader31");
  var elem32 = document.getElementById("Invader32");
  var elem33 = document.getElementById("Invader33");
  var elem34 = document.getElementById("Invader34");
  var elem35 = document.getElementById("Invader35");
  var elem36= document.getElementById("Invader36");
  var elem37= document.getElementById("Invader37");
  var elem38 = document.getElementById("Invader38");
  var elem39 = document.getElementById("Invader39");
  var elem40 = document.getElementById("Invader40");
  var elem41= document.getElementById("Invader41");
  var elem42 = document.getElementById("Invader42");
  var elem43 = document.getElementById("Invader43");
  var elem44 = document.getElementById("Invader44");
  var elem45 = document.getElementById("Invader45");
  var pos = 0;
  var g=1
  clearInterval(id);
  id = setInterval(frame, 1000);
  function frame() {
    if (pos == 1000) {
      clearInterval(id);
    } else {
      for(i=1;i<46;i++)
      {
      if (document.getElementById('Invader'+i).getBoundingClientRect().top > 522.0250244140625 & g==1){
        window.location.href = '../game/lose.html';
        g=0;
        }
      }
      pos=pos++;
      //prima wave!
      elem1.style.top = document.getElementById('Invader1').getBoundingClientRect().top + pos + 'px';
      elem2.style.top = document.getElementById('Invader2').getBoundingClientRect().top + pos + 'px';
      elem3.style.top = document.getElementById('Invader3').getBoundingClientRect().top + pos + 'px';
      elem4.style.top = document.getElementById('Invader4').getBoundingClientRect().top + pos + 'px';
      elem5.style.top = document.getElementById('Invader5').getBoundingClientRect().top + pos + 'px';
      elem6.style.top = document.getElementById('Invader6').getBoundingClientRect().top + pos + 'px';
      elem7.style.top = document.getElementById('Invader7').getBoundingClientRect().top + pos + 'px';
      elem8.style.top = document.getElementById('Invader8').getBoundingClientRect().top + pos + 'px';
      elem9.style.top = document.getElementById('Invader9').getBoundingClientRect().top + pos + 'px';
      elem10.style.top = document.getElementById('Invader10').getBoundingClientRect().top + pos + 'px';
      elem11.style.top = document.getElementById('Invader11').getBoundingClientRect().top + pos + 'px';
      elem12.style.top = document.getElementById('Invader12').getBoundingClientRect().top + pos + 'px';
      elem13.style.top = document.getElementById('Invader13').getBoundingClientRect().top + pos + 'px';
      elem14.style.top = document.getElementById('Invader14').getBoundingClientRect().top + pos + 'px';
      elem15.style.top = document.getElementById('Invader15').getBoundingClientRect().top + pos + 'px';

      //seconda wave!
      elem16.style.top = document.getElementById('Invader16').getBoundingClientRect().top + pos + 'px';
      elem17.style.top = document.getElementById('Invader17').getBoundingClientRect().top + pos + 'px';
      elem18.style.top = document.getElementById('Invader18').getBoundingClientRect().top + pos + 'px';
      elem19.style.top = document.getElementById('Invader19').getBoundingClientRect().top + pos + 'px';
      elem20.style.top = document.getElementById('Invader20').getBoundingClientRect().top + pos + 'px';
      elem21.style.top = document.getElementById('Invader21').getBoundingClientRect().top + pos + 'px';
      elem22.style.top = document.getElementById('Invader22').getBoundingClientRect().top + pos + 'px';
      elem23.style.top = document.getElementById('Invader23').getBoundingClientRect().top + pos + 'px';
      elem24.style.top = document.getElementById('Invader24').getBoundingClientRect().top + pos + 'px';
      elem25.style.top = document.getElementById('Invader25').getBoundingClientRect().top + pos + 'px';
      elem26.style.top = document.getElementById('Invader26').getBoundingClientRect().top + pos + 'px';
      elem27.style.top = document.getElementById('Invader27').getBoundingClientRect().top + pos + 'px';
      elem28.style.top = document.getElementById('Invader28').getBoundingClientRect().top + pos + 'px';
      elem29.style.top = document.getElementById('Invader29').getBoundingClientRect().top + pos + 'px';
      elem30.style.top = document.getElementById('Invader30').getBoundingClientRect().top + pos + 'px';

      //terza wave!
      elem31.style.top = document.getElementById('Invader31').getBoundingClientRect().top + pos + 'px';
      elem32.style.top = document.getElementById('Invader32').getBoundingClientRect().top + pos + 'px';
      elem33.style.top = document.getElementById('Invader33').getBoundingClientRect().top + pos + 'px';
      elem34.style.top = document.getElementById('Invader34').getBoundingClientRect().top + pos + 'px';
      elem35.style.top = document.getElementById('Invader35').getBoundingClientRect().top + pos + 'px';
      elem36.style.top = document.getElementById('Invader36').getBoundingClientRect().top + pos + 'px';
      elem37.style.top = document.getElementById('Invader37').getBoundingClientRect().top + pos + 'px';
      elem38.style.top = document.getElementById('Invader38').getBoundingClientRect().top + pos + 'px';
      elem39.style.top = document.getElementById('Invader39').getBoundingClientRect().top + pos + 'px';
      elem40.style.top = document.getElementById('Invader40').getBoundingClientRect().top + pos + 'px';
      elem41.style.top = document.getElementById('Invader41').getBoundingClientRect().top + pos + 'px';
      elem42.style.top = document.getElementById('Invader42').getBoundingClientRect().top + pos + 'px';
      elem43.style.top = document.getElementById('Invader43').getBoundingClientRect().top + pos + 'px';
      elem44.style.top = document.getElementById('Invader44').getBoundingClientRect().top + pos + 'px';
      elem45.style.top = document.getElementById('Invader45').getBoundingClientRect().top + pos + 'px';
      
    }
    
  }
}