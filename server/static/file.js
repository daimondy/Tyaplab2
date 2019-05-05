var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i<foldBtns.length; i++){
 foldBtns[i].addEventListener("click", function(event) {
 console.log("you clicked ", event.target);
 });
}
