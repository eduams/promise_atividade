function myDisplayer(value) {
    console.log(value);
}

const button = document.getElementById('button');
button.addEventListener('click', waitOrder)

function waitOrder() {
    try{
            const myPromiseInstance = new Promise(function(myResolve, myReject) {
                console.log("Pedido feito");
                setTimeout(() => {
                    const x = 0;
                    if (x == 0) {
                        myResolve("Pedido pronto");
                    } else {
                        myReject("Error");
                    }
                }, 10000);
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