function getDatos(){
    const d1=document.getElementById("inp_d1").value
    const d2=document.getElementById("inp_d2").value
    
    const op=document.getElementById("slt_operacion").value
    
    let resultado=calcular(op,d1,d2)
    document.getElementById("resultado").value = resultado.toFixed(2)
    console.log(resultado)
    

}

function calcular(op,d1,d2){

    let resultado=null
    if (op == 0) {
        resultado = Number(d1) / Number(d2)        
    }
    else if (op == 1) {
        resultado = d1 / d2
    }
    else if (op == 2) {
        resultado = d1 * d2
    }
    
    return resultado
   
}

const btn_datos=document.getElementById("btn_calcular")
btn_datos.addEventListener("click", getDatos)

function seteoLabel() {
    const op=document.getElementById("slt_operacion").value
    const label1=document.getElementById("label1")
    const label2=document.getElementById("label2")
    if( op == 0 ){
        label1.innerHTML='<span class="text-success">Voltaje</span>';
        label2.innerHTML='<span class="text-success">Intensidad</span>';
    }else if( op == 1 ){
        label1.innerHTML='<span class="text-warning">Voltaje</span>';
        label2.innerHTML='<span class="text-warning">Resistencia</span>';
    }else if( op == 2 ){
        label1.innerHTML='<span class="text-info">Intensidad</span>';
        label2.innerHTML='<span class="text-info">Resistencia</span>';
        
    }
}

const ch_operacion=document.getElementById("slt_operacion")
ch_operacion.addEventListener("change", seteoLabel)


    



    
