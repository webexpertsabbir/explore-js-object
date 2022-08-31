const student = {
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

// const result = student.exam();
// console.log(result);
const reExam = student.improvExam('algebra');
console.log(reExam);
const remaining = student.tratDey(900, 100);
console.log(remaining);
