const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['Calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.exam + 'is participating in an exam';
    },
    examArrow: () =>{
        console.log(this);
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

document.getElementById('this-click').addEventListener('click', function(){
    console.log(this);
})

function thisClick(){
    console.log(this)
}