document.getElementById("formSubmit").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("fname");
  const lastName = document.getElementById("lname");
  const country = document.getElementById("country");
  const subject = document.getElementById("subject");


  setTimeout(() => {
    console.log(firstName.value, lastName.value, country.value, subject.value);

    document.getElementById("formSubmit").reset();

    alert("pesan anda sukses dikirim")
  });
});
