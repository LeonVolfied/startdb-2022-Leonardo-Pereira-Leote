class Forca {

  constructor(palavraEscondida) {

    this.palavraEscondida = palavraEscondida.split(""); //separar a palavra por letras
    this.palavra = this.palavraEscondida.map((p) => p = "_"); //varrer a palavra e adicionar o underline
    this.letras = [];    //array pra guardar as palavras digitadas
    this.vidas = 6;      //numero de vidas
  }


  chutar(letra) {

    letra = letra.toLowerCase();  //deixa letras no minusculo pois no maiusculo não reconhece.

    if(letra.length > 1 || this.letras.includes(letra) || letra.length == 0 ) {
      console.log("ERRO!! Use apenas 1 letra ou tente outra letra.")
      return;
    }

    const verificarLetra = this.palavraEscondida.includes(letra);
    this.letras.push(letra);

    if(!verificarLetra) {
      this.vidas--;
    }else {
      for (let i = 0; i < this.palavraEscondida.length; i++) {
        if(this.palavraEscondida[i] === letra) {
          this.palavra.splice( i, 1, letra);
        }
      }
    }

   }

  buscarEstado() { 

    if (this.vidas <= 0) {
      return "perdeu";
    }
    for(let i = 0; i < this.palavraEscondida.length; i++){
      if(this.palavraEscondida[i] !== this.palavra[i]) {
        return "aguardando chute";
      }
    }
    return "ganhou";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {

    let letrasChutadas = this.letras;
    let palavra = this.palavra;
    let vidas = this.vidas;
    let dica = "FRUTA TROPICAL"

      return {
          letrasChutadas, // Deve conter todas as letras chutadas
          vidas, // Quantidade de vidas restantes
          dica,   // dica para a resposta
          palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
