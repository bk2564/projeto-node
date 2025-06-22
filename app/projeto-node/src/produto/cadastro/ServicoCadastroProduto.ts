import { HOST } from "../../host";
import type { Produto } from "../Produto";

export class ServicoCadastroProduto {

    async cadastrar(produto: Produto): Promise<void> {
        const resposta = await fetch(HOST + "/produto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        });
        if (!resposta.ok) throw new Error("Erro ao cadastrar o Produto!");
    }

}