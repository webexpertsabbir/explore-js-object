const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['Calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.exam + 'is participating in an exam';
    },
    improvExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvment exam on ${subject}`;
    },
    tratDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = kodomAli.exam();
// console.log(result);
const badamAli = {
    name: 'kacha badam',
    money: 8000
};
const result2 = kodomAli.exam.call(badamAli);
console.log(result2); 
const kodomAli1 = kodomAli.tratDey.call(badamAli, 200, 100);
console.log(kodomAli1)
const codomAli2 = kodomAli.tratDey.apply(badamAli, [100, 10]);
console.log(codomAli2);


const badamAli2 = kodomAli.tratDey.bind(badamAli);
    const remeinig = badamAli2(100, 20);
console.log(remeinig);

