let nomeHeroi = 'Kleber'

let quantidadeXP = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

//let quantidadeXP = 3682

nivelHeroi = ''

if (quantidadeXP == 1000){
    nivelHeroi = 'Ferro'
}
else if (quantidadeXP > 1000 && quantidadeXP <= 2000) {
    nivelHeroi = 'Bronze'
}
else if (quantidadeXP > 2000 && quantidadeXP <= 5000) {
    nivelHeroi = 'Prata'
}
else if (quantidadeXP > 5000 && quantidadeXP <= 7000) {
    nivelHeroi = 'Ouro'
}
else if (quantidadeXP > 7000 && quantidadeXP <= 8000) {
    nivelHeroi = 'Platina'
}
else if (quantidadeXP > 8000 && quantidadeXP <= 9000) {
    nivelHeroi = 'Ascendente'
}
else if (quantidadeXP > 9000 && quantidadeXP <= 10000) {
    nivelHeroi = 'Imortal'
}
else {
    nivelHeroi = 'Radiante'
}


console.log(`O Herói de nome ${nomeHeroi} tem um XP de ${quantidadeXP} está no nível de ${nivelHeroi}.`)

