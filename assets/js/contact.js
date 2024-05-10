(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
        checkFields();
      },
      false
    );
  });
})();

function checkFields() {
  const nombre = $("#validationCustom01").val();
  const apellido = $("#validationCustom02").val();
  const direccion = $("#validationCustom03").val();
  const mensaje = $("#validationCustom04").val();
  const terms = $("#invalidCheck").is(":checked");

  if (
    terms &&
    nombre != "" &&
    apellido != "" &&
    direccion != "" &&
    mensaje != ""
  ) {
    if ($("#exitoCheck").is(":checked")) {
      alert("Mansaje enviado");
      document.getElementById("contactForm").reset()
    } else {
      alert("Error en el envio");
    }
  }
}
