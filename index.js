let somaVitorias = calculoRanked();
let nivel = "";

// A função serve para simular vitórias e derrotas e depois retornar o saldo
function calculoRanked() {
    let vitorias = 0;
    let derrotas = 0;

    // Estrutura de repetição de vitórias
    for (let i = 1; i <= 50; i++) {
        console.log("Vitória!");
        console.log("Você venceu " + i + " vezes");
        vitorias = i; // atualiza o número total de vitórias
    }

    console.log("------------------------------");

    // Estrutura de repetição de derrotas
    for (let i = 1; i <= 1; i++) {
        console.log("Derrota!");
        console.log("Você perdeu " + i + " vez");
        derrotas = i; // atualiza o número total de derrotas
    }

    return vitorias - derrotas;
}
switch (true) {
    case somaVitorias <= 10:
        nivel = "Ferro";
        break;
    case somaVitorias >= 11 && somaVitorias <= 20:
        nivel = "Bronze";
        break;
    case somaVitorias >= 21 && somaVitorias <= 50:
        nivel = "Prata";
        break;
    case somaVitorias >= 51 && somaVitorias <= 80:
        nivel = "Ouro";
        break;
    case somaVitorias >= 81 && somaVitorias <= 90:
        nivel = "Diamante";
        break;
    case somaVitorias >= 91 && somaVitorias <= 100:
        nivel = "Lendário";
        break;
    case somaVitorias >= 101:
        nivel = "Imortal";
        break;
}

console.log("O Herói tem o saldo de vitórias " + somaVitorias + " e está no nivel " + nivel);
