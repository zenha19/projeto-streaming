function loadfooter()
{
    fetch("footer.html")
    .then(response=>response.text())
    .then(data=> {document.getElementById("footer").innerHTML = data;})
}


document.addEventListener("DOMContentLoaded",loadfooter());
