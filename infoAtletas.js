class Atletas {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso   
        this.altura = altura   
        this.notas = notas
    }
    //calcular categoria
    calcularcategoria() {
        if (this.idade >= 9 && this.idade <= 11) return "infantil"
        if (this.idade >= 12 && this.idade <= 13) return "juvenil"
        if (this.idade >= 14 && this.idade <= 15) return "Intermediario"
        if (this.idade >= 16 && this.idade <= 30) return "Adulto"
        return "sem categoria"
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }
calcularMediaValida() {
let notasOrdenadas = this.notas.slice().sort((a, b) => a - b)
let notasValidas = notasOrdenadas.slice(1, 4)
let soma = notasValidas.reduce((total, nota) => total + nota, 0)
return soma / notasValidas.length
    }
    obtemNomeAtleta() {
        return this.nome
    }
    obtemIdadeAtleta() {
        return this.idade
    }
    obtemPesoAtleta() {
        return this.peso
    }
    obtemAlturaAtleta() {
        return this.altura
    }
    obtemNotasAtleta() {
        return this.notas
    }
    obtemCategoria() {
        return this.calcularcategoria()
    }
    obtemIMC() {
        return this.calcularIMC()
    }
    obtemMediaValida() {
      return this.calcularMediaValida()
    }
}
let atleta = new Atletas("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida().toFixed(8)}`)
