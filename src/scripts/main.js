AOS.init();

const dataDoEvento = new Date("Jan 20, 2025 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distancia = timeStampDoEvento - timeStampAtual;

    const dia = 1000 * 60 * 60 * 24;
    const hora = 1000 * 60 * 60;
    const min = 1000 * 60;

    const diasParaOEvento = Math.floor(distancia / dia);
    const horasParaOEvento = Math.floor((distancia % dia) / hora);
    const minAteOEvento = Math.floor((distancia %  hora) / min); 
    const segAteOEvento = Math.floor((distancia %  min) / 1000); 

    document.getElementById('contador').innerHTML = `${diasParaOEvento}d ${horasParaOEvento}h ${minAteOEvento}m ${segAteOEvento}s`;

    if (distancia < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }
}, 1000);