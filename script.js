var circleTurn = true;

function f(id){
    var img = document.getElementById('box-' + id)
    
    if(img.width == 0){
        if(circleTurn){
            img.src ='assets/cerchio.png'
        } else {
            img.src ='assets/croce.png'
        }
    
        circleTurn = !circleTurn   

        check_result
    }
}