export class VisaoCadastroProduto {

    
    

    mostrarErro(message: string){
        (document.getElementById('erro-cadastro') as HTMLElement).innerText = message
    }

}