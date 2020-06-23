class Personagem extends Animacao {
    constructor(matriz, imagem, posX, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, posX, largura, altura, larguraSprite, alturaSprite)

        //altura do chao
        this.y_base = height - this.altura
        this.posY = this.y_base
        this.velocidade_pulo = 0
        //define o valor da gravidade
        this.g = 9;
    }

    pula() {
        this.velocidade_pulo = -50
    }

    /**
     * O método aplica gravidade fica responsável por
     * todo o tempo que o jogo está rodando, verificar
     * onde no eixo Y o personagem está e trazê-lo para baixo.
     * Assim como a gravidade está nos empurrando para baixo o tempo todo.
     */
    aplicaGravidade() {
        //aqui a posição do personagem recebe a velocidade do pulo,
        //ou seja, a altura em que o personagem vai pular
        this.posY += this.velocidade_pulo

        //aqui a velocidade decai de acordo com a gravidade,
        //ou seja, a altura do personagem diminui de acordo com a gravidade
        this.velocidade_pulo += this.g

        //aqui nos certificamos que o personagem não caia mais q o chão
        if(this.posY > this.y_base) {
            this.posY = this.y_base
        }
    }

    verificaColisao(inimigo) {
        const precisao = 0.65;
        return collideRectRect(
            this.posX, 
            this.posY, 
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.posX,
            inimigo.posY,
            inimigo.largura * precisao,
            inimigo.altura * precisao
            )
    }

}