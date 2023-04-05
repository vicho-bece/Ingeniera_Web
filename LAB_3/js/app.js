// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => { //Funcion Flecha
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    const campos= document.getElementById("campos");

    let password = document.getElementById("contrasenya");
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            if(password.value != "" && !checkPattern()) {
                campos.children[3].getElementsByClassName("invalid-feedback")[0].innerHTML = "Contraseña no valida";
            }
            console.log("Contraseña: " + password.value);

          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

function checkPattern(){
    var elem = document.getElementById("contrasenya");
    var pattern = elem.getAttribute("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$");
    var re = new RegExp(pattern);
    if (re.test(elem.value)) {
        return true;
    } else {
        return false;
    }
}
   