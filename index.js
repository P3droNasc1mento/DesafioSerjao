
    // Função para determinar o herói com base nos pontos de experiência
function obterHeroi(pontosDeExperiencia) {
    // Definindo as faixas de pontos de experiência e seus respectivos heróis
    if (pontosDeExperiencia >= 0 && pontosDeExperiencia < 1000) {
        return "Herói Novato";
    } else if (pontosDeExperiencia >= 1000 && pontosDeExperiencia < 5000) {
        return "Herói Intermediário";
    } else if (pontosDeExperiencia >= 5000 && pontosDeExperiencia < 10000) {
        return "Herói Avançado";
    } else {
        return "Herói Mestre";
    }
}

// Exemplo de uso da função com diferentes pontuações
var pontosExperienciaJogador1 = 800;
var pontosExperienciaJogador2 = 3000;
var pontosExperienciaJogador3 = 7500;

// Exibir os resultados
console.log("Jogador 1 é um:", obterHeroi(pontosExperienciaJogador1));
console.log("Jogador 2 é um:", obterHeroi(pontosExperienciaJogador2));
console.log("Jogador 3 é um:", obterHeroi(pontosExperienciaJogador3));
