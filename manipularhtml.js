const button_mordecai = document.querySelector("#button_mordecai");
const button_rigby = document.querySelector("#button_rigby")
const paragrafo = document.querySelector("p");
const imagem = document.querySelector("img");
const subtitulo = document.querySelector("h2");


button_mordecai.addEventListener("click", () => {

    subtitulo.textContent = "Mordecai";

    paragrafo.textContent = " Mordecai (Nascido em 1987) é um dos protagonistas principais em Apenas um Show, junto com o seu melhor amigo Rigby. Enquanto Mordecai tenta ser responsável e fazer um bom trabalho, é frequentemente desencaminhado por seu imaturo companheiro, totalmente imune à vergonha ou ao medo e sem nenhum limite. Ele é um jovem gaio azul de 23 anos, é o melhor amigo de Rigby. A sua voz é fornecida em inglês pelo próprio criador da série, J.G. Quintel, e em português por Sérgio Stern. ";

    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SVKE5Lx3c54kQkkS7j_ajQEr1IYhjQrkAQ&s"
    
});

button_rigby.addEventListener("click", () => {

    subtitulo.textContent = "Rigby";
    
    paragrafo.textContent = "Rigby é um personagem fictício e um dos protagonistas de Regular Show. Ele é um guaxinim, que tem 23 anos, é excêntrico, imaturo e preguiçoso, é o melhor amigo de Mordecai. Ele fez sua estréia no episódio piloto original a trabalhar como zelador no parque.";

    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQOqTM_zqCxN5QsIh9pe4Gc_O5_YO4w3vEg&s"
})
