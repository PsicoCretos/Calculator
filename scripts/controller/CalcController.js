class CalcController {
  constructor() {
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();
  }

  get displayCalc() {
    return this._displayCalc;
  }

  initialize() {
    //tudo que for acontecer, na hora q começar a calculadora
    let displayCalEl = document.querySelector("#display"); //El se refere ao elemento do html
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }
  get dataAtual() {
    return this._currentDate;
  }

  set dataAtual(data) {
    this._currentDate = data;
  }
}
