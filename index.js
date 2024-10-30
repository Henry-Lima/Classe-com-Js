//Henry Lima 


class Calculadora {

    //define os atributos
    constructor(valor1, valor2,) {

        this.valor1 = valor1;
        this.valor2 = valor2;
    }
     
    soma() {
       return this.valor1 + this.valor2; //função para somar
    }
    
    subtracao() {
        return  this.valor1 - this.valor2; //função para subtrair
    }

    divisao() {
        return this.valor1 / this.valor2;  //função para dividir
    } 
    
    multiplicacao() {
        return this.valor1 * this.valor2; //função para multiplicar
    } 
    

}