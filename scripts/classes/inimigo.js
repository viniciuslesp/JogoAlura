class Inimigo extends Animacao {
    constructor(matriz, imagem, posX, largura, altura, larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, posX, largura, altura, larguraSprite, alturaSprite)
        this.velocidade = velocidade
    }

    move() {
        this.posX -= this.velocidade

        if(this.posX < -this.largura) {
            this.posX = width
        }
    }
}