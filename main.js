const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = ['A','B','C','D','E','F','G','H','I',
    'J','K','L','M','N','O','P','Q','R','S','T','U',
    'V','W','X','Y','Z','1','2','3','4','5','6','7',
    '8','9','0','あ','い','う','え','お','か','き','く',
    'け','こ','さ','し','す','せ','そ','た','ち','つ',
    'て','と','な','に','ぬ','ね','の','は','ひ','ふ',
    'へ','ほ','ま','み','む','め','も','や','ゆ','よ',
    'ら','り','る','れ','ろ','わ','う','ぃ','う','ぇ',
    'を','ん'];
const codigoArray = [];
const conteoCodigo = 100;
const fontSize = 16;
const columns = canvas.width/fontSize;
let frame = 0;

class Matrix 
{
    constructor(x, y)
    {
        this.y = y;
        this.x = x;
    }
    dibujar(ctx)
    {
        this.valor = letras[Math.floor(Math.random()*(letras.length-1))]
        this.velocidad = Math.random()*fontSize * 3/4 + fontSize * 3/4
        ctx.fillStyle = "rgba(0, 255, 0)"
        ctx.font = fontSize + "px monospace"
        ctx.fillText(this.valor, this.x, this.y)
        this.y += this.velocidad

        if(this.y > canvas.height)
            {
                this.x = Math.floor((Math.random()*columns)*fontSize)
                this.y = 0
                this.velocidad = (-Math.random()*fontSize*3)/4 + (fontSize*3)/4
            }
    }
}

let actualizar = () =>{
    if(codigoArray.length < conteoCodigo)
        {
            let matrix = new Matrix(Math.floor(Math.random*columns)*fontSize, 0)
            codigoArray.push(matrix)
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
        ctx.fillRect(0,0, canvas.width, canvas.height)

    for(let i = 0; i < codigoArray.length && frame % 2 == 0; i++)
        {
            codigoArray[i].dibujar(ctx)
        }
    requestAnimationFrame(actualizar)
    frame++
}
actualizar();