$("select").on("change", function() {
  /*Obtnego el Mes que haya elegido el usuario */
  var opcion = $(this).val();
  /* Cambiar la imagen en función de la opción*/
  switch (opcion) {

    case "0":
      $("img").attr("src", "imagenes/5ead9b3707fb6.jpeg");
      break;

    case "1":
      $("img").attr("src", "imagenes/55-h3.jpg");
      break;

    case "2":
      $("img").attr("src", "imagenes/15859354324263.jpg");
      break;

    case "3":
      $("img").attr("src", "imagenes/blake-ryan.jpg");
      break;

    case "4":
      $("img").attr("src", "imagenes/bradpit.jpg");
      break;

          case "5":
            $("img").attr("src", "imagenes/image.jpg");
            break;
    case "6":
      $("img").attr("src", "famosos-mini-justin-bieber_91fee69e_600x900.jpg");
      break;

    case "7":
      $("img").attr("src", "imagenes/famosos-que-pasan-de-internet-tecnologia-redes-sociales-810x536.jpg");
      break;


          case "8":
            $("img").attr("src", "renato-6_b709bb0e.jpg");
            break;
                case "9":
                  $("img").attr("src", "tini-stoessel-coronavirus-famosos-con-coronavirus-768x506.jpg");
                  break;

                  case "10":
                    $("img").attr("src", "unnamed.jpg");
                    break;
                    case "11":
                      $("img").attr("src", "tini-stoessel-coronavirus-famosos-con-coronavirus-768x506.jpg");
                      break;
                      case "12":
                        $("img").attr("src", "renato-6_b709bb0e.jpg");
                        break;

  }



})
