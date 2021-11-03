  function createToken() {
   let top = Math.random();
   let fuck;
   let showcase;
   fuck = document.querySelector(".showcase");
   showcase = true;
   const token = document.createElement("img");
   let crypto = Math.floor(Math.random() * 4);
   let size = Math.random() * 50;
   token.className = "token";
   token.style.borderRadius = 100 + "%";
   token.style.zIndex = 6;

   if (crypto == 0) {
    token.style.background = "rgb(63, 63, 63)";
    token.src = "vapur.svg";
    token.style.padding = "5px";
    token.style.width = 20 + size + "px";
    token.style.height = 20 + size + "px";
   }
   if (crypto == 1) {
    token.src = "bitcoin.svg";
    token.style.width = 30 + size + "px";
    token.style.height = 30 + size + "px";
   }
   if (crypto == 2) {
    token.style.background = "rgb(63, 63, 63)";
    token.style.padding = "5px";
    token.src = "eth.svg";
    token.style.width = 20 + size + "px";
    token.style.height = 20 + size + "px";
   }
   if (crypto == 3) {
    token.src = "litecoin.svg";
    token.style.width = 30 + size + "px";
    token.style.height = 30 + size + "px";
   }

   token.style.bottom = 0 + "px";
   token.style.left = Math.random() * (innerWidth - 100) + "px";

   fuck.appendChild(token);

   setTimeout(() => {
    token.remove();
   }, 200000);
  }
  setInterval(createToken, 2500);
