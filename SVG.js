$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

var svgb1, svgb2;
let count = 0;


function setup() {
  var object = document.getElementById("logoObject");
  var svgDocument = object.contentDocument;
  svgb1 = svgDocument.getElementsByClassName("st0");
  svgb2 = svgDocument.getElementsByClassName("st3");
  frameRate(2);
}

function draw() {
  // svgb1[0].setAttribute("fill", "yellow");
  // svgb2[0].setAttribute("fill", "red");

  if(mouseIsPressed){
    count++;
  }

  if(count % 2 == 0){
    svgb1[0].setAttribute("fill", "yellow");
    svgb2[0].setAttribute("fill", "red");
  }else{
    svgb1[0].setAttribute("fill", "black");
    svgb2[0].setAttribute("fill", "black");
  }
}
