export async function pedirMetas() {
    const response = await fetch('/metas.json');
    const metas = await response.json();
    console.log('Soy "metas" y así salgo de Pedidos.js: ', metas);
    return metas;
};
