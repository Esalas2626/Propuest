const Yesbtn = document.querySelector("#Yesbtn");

Yesbtn.addEventListener("click", function () {
  alert("sabias que ibas a decir que si, ahora casate conmigo Camila UwU");
});

const Nobtn = document.querySelector("#Nobtn");

Nobtn.addEventListener("mouseover", function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  Nobtn.style.setProperty("top", randomY + "%");
  Nobtn.style.setProperty("left", randomX + "%");
  Nobtn.style.setProperty(
    "transform",
    `translate(-${randomX}%, -${randomY})%)`
  );
});
