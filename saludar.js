
function saludar (nombre){
    return `Hello ${nombre}`;
}

function saludarHelloWorld (){
    return '¡Hello World!'
}

//module.exports.saludar = saludar;
//module.exports.saludarHelloWorld = saludarHelloWorld;

module.exports = {
    saludar : saludar,
    saludarHelloWorld : saludarHelloWorld
};