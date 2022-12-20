function parseCount(number){
    if(Number.isNaN(Number.parseFloat(number))){
        const error = new Error("Невалидное значение");
        throw error;
    }
    return Number.parseFloat(number);
}

function validateCount(number){
    try{
        return parseCount(number)
    } catch (error){
        return error;
    }
}

class Triangle{
    constructor(a, b, c){
        if(a + b < c || a + c < b || c + b < a){
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter(){
        return this.a + this.b + this.c;
    }

    get area(){
        const p = 0.5 * (this.a + this.b + this.c);
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}