/*
Ser autenticavel siginifica ter um método autentificar

ducky type
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticar){
        return "autenticar" in autenticar && autenticar.autenticar instanceof Function
    }
}