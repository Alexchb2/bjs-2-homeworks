function Student(name, gender, age) {
       this.name = name;
       this.gender = gender;
       this.age = age;
       this.marks = [];
       Student.prototype.setSubject = function (subjectName) {
        this.subject = subjectName;
      }
      Student.prototype.addMarks = function (...marks) {
        this.marks = [...marks];
      }
      Student.prototype.getAverage = function () {
        if(this.marks.length === 0){
        return 0
        } else {
            let summ = 0;
            let number = 0;
            for(let i = 0; i < this.marks.length; i++){
                summ = summ + this.marks[i];
                number = number + 1;
            }
            return summ / number
        }
      }
      Student.prototype.exclude = function (reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
      }
}