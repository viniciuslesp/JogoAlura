class Animacao {
    constructor(matriz, imagem, posX, largura, altura, larguraSprite, alturaSprite) {
        this.matriz = matriz
        this.imagem = imagem
        this.largura = largura
        this.altura = altura
        this.posX = posX
        this.posY = height - this.altura
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite

        this.frameAtualMatriz = 0
    }

    exibe() {
        image(
            this.imagem,
            this.posX, 
            this.posY, 
            this.largura, 
            this.altura, 
            this.matriz[this.frameAtualMatriz][0], 
            this.matriz[this.frameAtualMatriz][1], 
            this.larguraSprite, 
            this.alturaSprite
        )
        this.anima()
    }

    anima() {
        this.frameAtualMatriz++
        if(this.frameAtualMatriz > this.matriz.length - 1) {
            this.frameAtualMatriz = 0
        }
    }
}