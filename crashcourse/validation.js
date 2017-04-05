function validateForm() {
    var x = document.forms["myForm"]["firstname1"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}