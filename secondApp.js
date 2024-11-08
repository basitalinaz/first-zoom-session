var personName = "";
personName = prompt("what is your name ") || "";
if (personName !== null && personName !== "") {
    alert("hello ".concat(personName, " you are taking help of your teacher who name is shahmeer"));
}
else {
    alert("you have to take rest now");
}
