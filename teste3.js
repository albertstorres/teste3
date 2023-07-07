let numeros = [8, 5, 99, -5];
let menor = numeros[0];

for (let i = 0; i < 4; i++) {
    if (menor > numeros[i]) {
        menor = numeros[i];
    }
}

console.log("O MENOR NUMERO EH: ", menor);