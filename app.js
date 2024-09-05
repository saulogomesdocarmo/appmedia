/**
 * Cálculo da média
 * @author Saulo Gomes
 */


// variavéis 
let nota1,nota2,media 

function calcular(){
    //entrada
    nota1 = Number(frmMedia.txtNota1.value)
    nota2 = Number(frmMedia.txtNota2.value)

    //processamento
    media = (nota1 + nota2) / 2
    //saida
    frmMedia.txtMedia.value = media.toFixed(1)
    //status
    if(media < 5 ){
        frmMedia.txtStatus.value = "REPROVADO"
    
    } else{
        frmMedia.txtStatus.value = "Aprovado"
    }
}