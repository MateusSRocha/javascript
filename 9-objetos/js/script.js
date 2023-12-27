
var obj = {
    nome: "Mateus",
    sobrenome: "Rocha",
    idade: 16,
    profissao: "Estudante",
    estatrabalhando: false
};

// PODEMOS DIZER ENTÃO QUE UM OBJETOI NADA MAIS É DO QUE UM DICIONÁRIO 

console.log(obj);
console.log(typeof obj);

console.log('Nome: ' + obj.nome);
console.log('Sobrenome: ' + obj.sobrenome);
console.log('Nome completo: ' + obj.nome + ' ' + obj.sobrenome);
console.log('Idade: ' + obj.idade);
console.log("Profissão:" + obj.profissao);

var estaTrabalhando;

if (obj.estatrabalhando === false) {
    estaTrabalhando = 'Não está Trabalhando!'
} else {
    estaTrabalhando = 'Está Trabalhando!'
};

console.log("Situação: " + estaTrabalhando);