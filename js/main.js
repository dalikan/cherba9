var lektiba = document.getElementById("bruh");
var seize1 = document.getElementById("option1");
function bold1() {
    event.preventDefault();
    lektiba.style.fontWeight="bold";
}
function italic1() {
    event.preventDefault();
    lektiba.style.fontStyle = "italic";
}
function underligned1() {
    event.preventDefault();
    lektiba.style.textDecoration = "underline";
}
function kadeh() {
    event.preventDefault();
    lektiba.style.resize = "none"; 
    lektiba.style.fontSize = document.getElementById("op").value; 

}