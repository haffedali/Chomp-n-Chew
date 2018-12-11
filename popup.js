
//on button press, start chomp function
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('startEating');
    checkPageButton.addEventListener('click', function() {
        chomp()
    }, false);
  }, false);



function meal () {

}
function chomp() {
    var box = document.getElementById("colorBox");
    console.log(box)
}