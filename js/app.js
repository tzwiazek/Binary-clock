var Tab = [];
var circle = document.getElementsByClassName('circle');

function set_clock() {
   TimeRemove(); // clear settings
   var d = (new Date);
   var h = d.getHours(); // h
   var min = d.getMinutes(); // min
   var sec = d.getSeconds(); // sec

   // h
   Tab[0] = Math.floor(h/10);
   Tab[1] = h%10;
   // min
   Tab[2] = Math.floor(min/10);
   Tab[3] = min%10;
   // sec
   Tab[4] = Math.floor(sec/10);
   Tab[5] = sec%10;

   clock(1,1); // h
   clock(3,2); // min
   clock(5,3); // sec
   setTimeout(set_clock, 1000); //refresh
}

function clock(x, y) {
   // first number
   if (Tab[x-1] == 5){light(y, 6), light(y, 2);}
   else if (Tab[x-1] == 4){light(y, 2);}
   else if (Tab[x-1] == 3){light(y, 6), light(y, 4);}
   else if (Tab[x-1] == 2){light(y, 4);}
   else if (Tab[x-1] == 1){light(y, 6);}

   // second number
   if (Tab[x] == 1){light(y, 7);}
   else if (Tab[x] == 2){light(y, 5);}
   else if (Tab[x] == 3){light(y, 7), light(y, 5);}
   else if (Tab[x] == 4){light(y, 3);}
   else if (Tab[x] == 5){light(y, 7), light(y, 3);}
   else if (Tab[x] == 6){light(y, 5), light(y, 3);}
   else if (Tab[x] == 7){light(y, 7), light(y, 5), light(y, 3);}
   else if (Tab[x] == 8){light(y, 1);}
   else if (Tab[x] == 9){light(y, 7), light(y, 1);}
}

function TimeRemove() {
// clear settings
   for(var i = 0; i<circle.length;i++) {
      circle[i].classList.remove("light");
   }
}

function light(x, y) {
// select row
   if(x == 1){
      circle[y].classList.add("light");
   }
   else if (x == 2) {
      y = y+8;
      circle[y].classList.add("light");
   }
   else {
      y = y+16;
      circle[y].classList.add("light");
   }
}

set_clock();