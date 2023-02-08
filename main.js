function validateForm() {
    var fieldA = document.getElementById("fieldA").value;
    var fieldB = document.getElementById("fieldB").value;
    var message = document.getElementById("message");
    
    if (fieldB > fieldA) {
    message.innerHTML = "Formulário válido.";
        return true;
    } else {
    message.innerHTML = "O número em Campo B deve ser maior que o número em Campo A.";
        return false;
    }
}