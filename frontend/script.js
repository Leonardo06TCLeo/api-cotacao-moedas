async function buscarCotacao() {
    const moeda = document.getElementById("moeda").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Buscando cotação...";

    try {
        const response = await fetch(`http://localhost:3000/cotacao/${moeda}`);
        const data = await response.json();

        const chave = `${moeda}BRL`;
        const cotacao = data[chave];

        resultado.innerHTML = `
            <strong>${cotacao.name}</strong><br>
            Valor atual: R$ ${Number(cotacao.bid).toFixed(2)}<br>
            Maior valor: R$ ${Number(cotacao.high).toFixed(2)}<br>
            Menor valor: R$ ${Number(cotacao.low).toFixed(2)}<br>
            Data: ${cotacao.create_date}
        `;
    } catch (error) {
        resultado.innerHTML = "Erro ao buscar cotação.";
    }
}