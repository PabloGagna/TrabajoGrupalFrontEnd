function validateForm() {
    let x = document.forms["registro"]["nombre"].value;
    
    if (x == "") {
        alert("Falta ingresar el nombre");
        return false;
    }
    let y = document.forms["registro"]["apellido"].value;
    
    if (y == "") {
        alert("Falta ingresar el apellido");
        return false;
    }
    let z = document.forms["registro"]["nacimiento"].value;
    
    if (z == "") {
        alert("Falta ingresar la fecha de nacimiento");
        return false;
    }
    let w = document.forms["registro"]["mail"].value;
    
    if (w == "") {
        alert("Falta ingresar el mail");
        return false;
    }
    let q = document.forms["registro"]["pass"].value;
    
    if (q == "") {
        alert("Falta ingresar el password");
        return false;
    }
    let e = document.forms["registro"]["passconfirm"].value;
    
    if (e == "") {
        alert("Falta confirmar el password");
        return false;
    }


}