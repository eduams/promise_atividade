var total_time = 0;

function myDisplayer(value) {
    console.log(value);
}
function addTime(time){
    total_time = total_time + time;
    document.getElementById("output").innerHTML = "Tempo total de espera: " + total_time/1000 + " segundos";
}
const button = document.getElementById('button');
button.addEventListener('click', waitOrder)
function waitOrder() {
    try{
            const myPromiseInstance = new Promise(function(myResolve, myReject) {
                console.log("Pedido feito");
                document.getElementById("output").innerHTML = "Aguardando pedido...";
                setTimeout(() => {
                    const x = 0;
                    if (x == 0) {
                        myResolve("Pedido pronto");
                        document.getElementById("output").innerHTML = "Pedido pronto!";
                        total_time = 0; // Reset total time after order is completed
                    } else {
                        myReject("Error");
                    }
                }, total_time);
            });
            myPromiseInstance.then(
            function(value) { myDisplayer(value); },
            function(error) { myDisplayer(error); }
            );
            myPromiseInstance.finally(() => {
                console.log("Pedido finalizado");
            });
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}