function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fAno.value.lenght == 0 || fAno.value > ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >=0 && idade < 10) {
        //Criança
        img.setAttribute(
          "src",
          "https://www.soumae.org/wp-content/uploads/2019/12/cortes-de-cabelo-masculino-infantil-3.jpg"
        );
      } else if (idade < 22) {
        //jovem
        img.setAttribute(
          "src",
          "https://media.istockphoto.com/photos/fashion-shot-of-young-man-with-playful-look-white-background-picture-id174829346"
        );
      } else if (idade < 50) {
        //adulto
        img.setAttribute(
          "src",
          "https://thumbs.dreamstime.com/b/homem-adulto-%C3%A0-moda-que-gesticula-o-sinal-positivo-32323629.jpg"
        );
      } 
      else {
        //idoso
        img.setAttribute(
          "src",
          "https://img.freepik.com/fotos-gratis/homem-velho-apos-grooming-cabelo-em-barbearia_23-2148181972.jpg?size=338&ext=jpg"
        );
        }
    }
    else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >=0 && idade < 10) {
        //Criança
        img.setAttribute(
          "src",
          "https://http2.mlstatic.com/D_NQ_NP_815721-MLB43211213453_082020-O.jpg"
        );
      } else if (idade < 22) {
        //jovem
        img.setAttribute(
          "src",
          "https://img.freepik.com/fotos-gratis/mulher-jovem-parda-de-aparencia-amigavel-com-cabelos-cacheados-cacheados-e-sorrindo-alegremente_273609-13896.jpg?w=2000"
        );
      } else if (idade < 50) {
        //adulto
        img.setAttribute(
          "src",
          "https://thumbs.dreamstime.com/b/mulher-adulta-feliz-que-sorri-em-voc%C3%AA-43811922.jpg"
        );
      } 
      else {
        //idoso
        img.setAttribute(
          "src",
          "https://envato-shoebox-0.imgix.net/5ce4/8d46-2e18-488d-8653-8e8d4d572ef4/WY0A5707.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=83fde272a4fc1d164f4698ad2b8ba85d"
        );
        }
    }
    
    img.width = "250"
    
    res.innerHTML = `${genero} ${idade} <br> <br>`;
    
    res.appendChild(img);
  
}
}