
let load = document.getElementById('load')
function appendToResult(value) {

    document.getElementById('result').value += value
}

function clearResult() {
    document.getElementById('result').value = '';
}


function calculateResult() {
    try {
        load.classList.add('active')
        setTimeout(() => {
            document.getElementById('result').value = eval(document.getElementById('result').value);
            load.classList.remove('active')
        }, 2000)

    } catch (error) {
        setTimeout(() => {
            load.classList.add('active')
            document.getElementById('result').value = 'ERROR'
        }, 1500)
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/^[0-9+\-*/.c=]$/.test(key)) {
        event.preventDefault();
        if (key === ' C') {
            clearResult()
        } else if (key === '=') {
            calculateResult();
        } else {
            appendToResult(key)
        }
    }
});
// window.onkeydown = function(e){
//     console.log(e.keycode);
// }