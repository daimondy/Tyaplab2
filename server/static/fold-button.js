var but = document.getElementsByClassName("btn btn-secondary btn-sm fold-button");

function fun() {
    if (event.target.className == "btn btn-secondary btn-sm fold-button folded") {
        event.target.innerHTML = "Свернуть"
        event.target.className = "btn btn-secondary btn-sm fold-button"
        var displayState = "block"
    }
    else {
        event.target.innerHTML = "Развернуть"
        event.target.className = "btn btn-secondary btn-sm fold-button folded"
        var displayState = "none"
    }
    event.target
        .parentElement
        .getElementsByClassName("article-content")[0]
        .style.display = displayState;
}

for (var i = 0; i < but.length; i++) {
    but[i].addEventListener('click', fun)
}