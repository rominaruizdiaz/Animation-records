function currentDiv(imageNumber) {
    var mainImage = document.getElementById("mainImage");
    switch(imageNumber) {
      case 1:
        mainImage.src = "../assets/imagenes/taza1.webp";
        break;
      case 2:
        mainImage.src = "../assets/imagenes/taza2.webp";
        break;
      case 3:
        mainImage.src = "../assets/imagenes/taza3.webp";
        break;
      case 4:
        mainImage.src = "../assets/imagenes/taza4.webp";
        break;
    }
  }