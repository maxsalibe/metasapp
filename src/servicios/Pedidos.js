export async function pedirMetas() {
    const response = await fetch('/metas.json');
    const metas = await response.json();
    console.log('Soy \'metas\' y salgo de Pedidos.js\nen el tipo ' + typeof metas + '. Aquí me presento:', metas);
    return metas;
};
