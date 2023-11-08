function display(x){
    let display = document.getElementById('display');
    display.innerHTML += x.innerHTML;
}
function solve(){
    let x = document.getElementById('display').innerHTML
    let y = eval(x);
    document.getElementById('display').innerHTML = y
    return y
}






    button.addEventListener('click', (e) => {
        switch(e.display.innerHTML){
            case 'DEL':
                display.innerHTML = '';
                break;
        }
    })