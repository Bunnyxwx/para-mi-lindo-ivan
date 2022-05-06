const words = [
    "MI AMORSITO",
    "MI CIELO",
    "MI VIDA",
    "MI OSITO",
    "MI REY",
    "MI PRINCIPE",
    "CARIÑO",
    "MI ESPOSO",
    "MI TERRONCITO",
    "MI DULCESITO",
    "MI BOLITA DE AMOR",
    "DULZURA",
    "MI BEBE",
    "MI NUBECITA DE AMOR",
    "MI NIÑO HERMOSO",
    "MI CORAZON",
    "MI AMO",
    "MI TODO"
];

const dom = {
    love: document.querySelector(".love")
};

dom.love.style.setProperty("--particles", words.length);

words.forEach((word, i) => {
    let span = document.createElement("span");
    span.style.setProperty("--n", i + 1);
    span.innerText = word;
    dom.love.appendChild(span);
});