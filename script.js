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
    }
}