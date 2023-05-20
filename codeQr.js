
   var qr_texte = document.querySelector(".qr_texte");
   var qrcode = document.querySelector(".qr_code");
    var btn_save_me = document.querySelector(".btn_save_me");
     qr_texte.addEventListener("change",iGenereQrYourWrite);
    btn_save_me.addEventListener("click",printOrSauve);

   function iGenereQrYourWrite(){
             
             qrcode.style.display = "flex";
             qrcode.innerHTML ="";
             btn_save_me.style.display ="flex";
             new QRCode(qrcode ,qr_texte.value);
             qr_texte.value = "";
               
     }


    // gerons le cas d'impression ou de sauvegarde  de notre code qr

    function printOrSauve(){
      var baliseLien = document.createElement("a");
      var qrImg = qrcode.querySelector("img");
      baliseLien.href = qrImg.src;
     baliseLien.download = qr_texte.value;
      baliseLien.click();
      // when i want to print
      // window.print();
    }