function mainfn(){
    var input = document.getElementById("input").value
    var unit = document.getElementById("unit").value
    let result;
    if (unit=='Celsius'){
        result = (input - 32) / (9/5 * input)
    }
    else if (unit=='Fahrenheit'){
        result= (9/5 * input)+32
    }
    resulthtml = `<p>${result}° ${unit}</p>`
    document.getElementById('result').innerHTML = resulthtml ;   
}