//variable que almacena la imagen original "Punta"
const img1 = document.querySelector('.shoe1_a');

//variable que almacena la imagen original "Medio"
const img2 = document.querySelector('.shoe1_b');

//variable que almacena la imagen original "Talón"
const img3 = document.querySelector('.shoe1_c');

//variable que almacenan el boton "Comprar"
const buy = document.querySelector('.buy-btn');

//variable que almacena los dropdown para seleccionar tipo de piel 
const select_P = document.querySelector('.select_P');
const select_M = document.querySelector('.select_M');
const select_T = document.querySelector('.select_T');

//variable que almacena los dropdown para seleccionar tipo de piel 
const select_color_P = document.querySelector('.select_color_P');

var result_P;
var result_M;
var result_T;



//Funcion para cambiar el tipo de piel de la punta
select_P.addEventListener('change', () =>{
     result_P = select_P.options[select_P.selectedIndex].value;
    console.log(result_P);
    if(result_P == 'Cocodrilo_cafe'){
        img1.src = 'images/cocP_cafe.png'
    }

    if(result_P == 'Cocodrilo_negro'){
        img1.src = 'images/cocP_negro.png'
    }

    if(result_P == 'Cocodrilo_blanco'){
        img1.src = 'images/cocP_blanco.png'
    }

    if(result_P == 'Víbora'){
        img1.src = 'images/shoe2_a.png'
    }
    
})




//Funcion para cambiar el tipo de piel del medio
select_M.addEventListener('change', () =>{
    result_M = select_M.options[select_M.selectedIndex].value;
    if(result_M == 'Cocodrilo_cafe'){
        img2.src = 'images/cocM_cafe.png'
    }

    if(result_M == 'Cocodrilo_negro'){
        img2.src = 'images/cocM_negro.png'
    }

    if(result_M == 'Cocodrilo_blanco'){
        img2.src = 'images/cocM_blanco.png'
    }

    if(result_M == 'Víbora'){
        img2.src = 'images/shoe2_b.png'
    }
    
})

//Funcion para cambiar el tipo de piel del talón
select_T.addEventListener('change', () =>{
    result_T = select_T.options[select_T.selectedIndex].value;
    if(result_T == 'Cocodrilo_cafe'){
        img3.src = 'images/cocT_cafe.png'
    }

    if(result_T == 'Cocodrilo_negro'){
        img3.src = 'images/cocT_negro.png'
    }

    if(result_T == 'Cocodrilo_blanco'){
        img3.src = 'images/cocT_blanco.png'
    }

    if(result_T == 'Víbora'){
        img3.src = 'images/shoe2_c.png'
    }
    
})


buy.addEventListener('click', () => {
    const selected1 = document.getElementById('select_P');
    const selected2 = document.getElementById('select_M');
    const selected3 = document.getElementById('select_T');
    const selected_v1 = select_P.options[select_P.selectedIndex].text;;
    const selected_v2 = select_M.options[select_M.selectedIndex].text;;
    const selected_v3 = select_T.options[select_T.selectedIndex].text;;
    
    console.log("Punta:"+selected_v1,"Medio:"+selected_v2,"Talón:"+selected_v3);
})


