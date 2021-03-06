export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta ){
            throw new Error("Você não deveria instaciar um objeto do tipo conta Diretamente, pois essa é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Método abstratos
    sacar(valor){
        throw Error("É o método sacar da Conta é um metodo abstrato, não foi feito para ser chamando direto e sim para ser sobre escrito")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);        
    }
}