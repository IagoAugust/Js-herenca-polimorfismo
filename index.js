import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12457567546);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 575467436634);
gerente.cadastrarSenha("1233")

const cliente = new Cliente("lais", 24124344324, "456");

const estaLogadoDiretor = SistemaAutenticacao.login(diretor, "123456");
const estaLogadoGerente = SistemaAutenticacao.login(gerente, "1233");

const estaLogadoCliente = SistemaAutenticacao.login(cliente, "456");

console.log(estaLogadoGerente, estaLogadoDiretor, estaLogadoCliente);