const btEqueue = document.getElementById("btEqueue");
const btDequeue = document.getElementById("btDequeue");
const inputName = document.getElementById("inputName");
const inputColor = document.getElementById("colors");
const client = document.getElementById("client");

function Queue() {

    list = [];

    Queue.prototype.equeue = function () {
        
        let name = inputName.value.trim();
        let color = inputColor.value.trim();
        let newClient = clientFactory(name, color);
        if (!name) {
            alert("Digite um nome!");
            return;
        }
        list.push(newClient);
        inputName.value = "";
        inputName.focus();
        client.innerHTML = `${newClient.name}`;
        console.log("equeue " + `${list.length}`);
    }

    Queue.prototype.dequeue = function () {
        if(list.length > 0){
            list.shift();
            console.log("dequeu " + `${list.length}`);
        }else{
            alert("Não há objetos na fila.")
        }
    }


}


function clientFactory(name, color) {
    let client = {};
    client.name = name;
    client.color = color;
    return client;
}


var Queue = new Queue();

btEqueue.onclick = Queue.equeue;
btDequeue.onclick = Queue.dequeue;
