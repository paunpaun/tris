var circle_turn = true;

function f(id){
    var img = document.getElementById('box-' + id)
    
    if(img.width == 0){
        if(circle_turn){
            img.src ='assets/circle.png'
        } else {
            img.src ='assets/cross.png'
        }
    
        circle_turn = !circle_turn 
        
        check_tris()
    }
}

function check_tris(){
    var list = ['circle','cross']

    for (element of list){
        
        if( 
            //diagonals
            (document.getElementById('box-1').src.includes(element) &&
            document.getElementById('box-5').src.includes(element) &&
            document.getElementById('box-9').src.includes(element)) ||

            (document.getElementById('box-3').src.includes(element) &&
            document.getElementById('box-5').src.includes(element) &&
            document.getElementById('box-7').src.includes(element)) ||

            //rows
            (document.getElementById('box-1').src.includes(element) &&
            document.getElementById('box-2').src.includes(element) &&
            document.getElementById('box-3').src.includes(element)) ||

            (document.getElementById('box-4').src.includes(element) &&
            document.getElementById('box-5').src.includes(element) &&
            document.getElementById('box-6').src.includes(element)) ||

            (document.getElementById('box-7').src.includes(element) &&
            document.getElementById('box-8').src.includes(element) &&
            document.getElementById('box-9').src.includes(element)) ||
            
            //columns
            (document.getElementById('box-1').src.includes(element) &&
            document.getElementById('box-4').src.includes(element) &&
            document.getElementById('box-7').src.includes(element)) ||

            (document.getElementById('box-2').src.includes(element) &&
            document.getElementById('box-5').src.includes(element) &&
            document.getElementById('box-8').src.includes(element)) ||

            (document.getElementById('box-3').src.includes(element) &&
            document.getElementById('box-6').src.includes(element) &&
            document.getElementById('box-9').src.includes(element))
        ){
            alert(element + ' wins')
            window.location.reload();
        }
    }
}