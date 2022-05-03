var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("count").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://567znx3zkc.execute-api.us-east-1.amazonaws.com/Prod/hello", true);
xhttp.send();