
let submitHere = function () {
    let uname = document.querySelector("#userid").value;
    let uname1 = document.querySelector("#passid").value;
    let uname2 = document.querySelector("#emailid").value;


    const newElement = document.querySelector("#referencefid").cloneNode(true);

    newElement.removeAttribute("id");
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = "Username : " + uname;
    newElement.children[1].innerHTML = "password : " + uname1;
    newElement.children[2].innerHTML = "Email : " + uname2;

    const commentBox = document.querySelector("#commentBox");

    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#userid").value = "";
    document.querySelector("#passid").value = "";
    document.querySelector("#emailid").value = "";
}


