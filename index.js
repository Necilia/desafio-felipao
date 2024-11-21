function classificarHeroi() {
    // Obtém os valores dos campos
    const nomeHeroi = document.getElementById("nomeHeroi").value;
    const xpHeroi = parseInt(document.getElementById("xpHeroi").value);
  
    // Validação
    if (!nomeHeroi || isNaN(xpHeroi)) {
        alert("Por favor, insira um nome válido e um número para a XP.");
        return;
    }
  
    let nivelHeroi = ""; // A variável agora é definida aqui

    // Lógica para determinar o nível com base no valor de XP
    if (xpHeroi < 1000) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    // Exibe o resultado na página
    document.getElementById("resultado").textContent = `O herói ${nomeHeroi} está no nível de ${nivelHeroi}.`;

    // Para depuração
    console.log("Nome do herói:", nomeHeroi);
    console.log("XP do herói:", xpHeroi);
    console.log("Nível do herói:", nivelHeroi);
}

// Adiciona o evento de clique no botão
document.getElementById("classificarBtn").addEventListener("click", classificarHeroi);
