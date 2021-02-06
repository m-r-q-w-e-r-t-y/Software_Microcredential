var index = 0;
var myList = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function up(){
  if(index >= 0){
    index--;
    updateScreen();
  }
}

function down(){
  if(index <= myList.length-1){
    index++;
    updateScreen();
  }
}

function updateScreen(){
  if(myList[index] == "yellow"){
      document.getElementById('roygbiv').src = "yellow.png";
  }
  else if (myList[index] == "red") {
      document.getElementById('roygbiv').src = "red.png";
  }
  else{
      document.getElementById('roygbiv').src = "blue.png";
  }
}
