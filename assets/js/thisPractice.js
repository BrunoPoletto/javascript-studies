/*Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
 */
const PERSON1 = {
	name: "Martha",
	age: 18,
};

const PERSON2 = {
	name: "Bruce",
	age: 36,
};

const PERSON3 = {
	name: "Brian",
	age: 8,
};

function calculateAge(years) {
	return `Daqui a ${years} anos, ${this.name} terá ${
		this.age + years
	} anos de idade.`;
}

console.log(calculateAge.call(PERSON1, 12));

console.log(calculateAge.apply(PERSON2, [8]));