/*
Ser autenticavel siginifica ter um método autentificar
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}