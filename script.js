function calc(e){
   
    var operacao = e.value;
    
    var n1=parseFloat(document.getElementById("x").value);
    var n2=parseFloat(document.getElementById("y").value);
    
    var calculo = eval(n1+operacao+n2);

    if(!isNaN(calculo)){
        document.getElementById('z').value = calculo
    }

}
const calcular = function(){
let x = document.getElementById('x').value
let y = document.getElementById('y').value
z = (y / (x * x))
document.getElementById('z').value = z
console.log(z)
}
const zero = function(){
 document.getElementById('x').value = ""
 document.getElementById('y').value = ""
 document.getElementById('z').value = ""
}

let tabela = []

const addtabela = () => {
    let tabela = document.getElementById('tabela').value
    
    document.getElementById('tabela').value = ""

    if(localStorage.getItem('tabela') != null){
        tabela = JSON.parse(localStorage.getItem('tabela'))
}
let data = new Date();
let date = `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;

tarefas.push([date, tarefa])
localStorage.setItem('tabela', JSON.stringify(tabela))
}

const list = () => {
    let tbody = document.querySelector('#tr-tabel')

    if (localStorage.getItem('tabela') != null){
        tabela = JSON.parse(localStorage.getItem('tabela'))
    } else {
        tabela.push(["Sem dados ","Sem dados"])
    }

    tabela.forEach((element,index) => {
        tbody.innerHTML += "<tr><td>" + element[0]
            +"</td><td>" + element[1] + "</td>" +
             "<td><button onclick='deletar(" + index + ")'> 🗑 </button></td></tr>"
    });
}

const deletar = (index) => {
    newArray = tabela.filter(
        (e, i) => i != index
    )
    localStorage.setItem('tabela', JSON.stringify(newArray))
    document.location.reload(true)
}