<script>
    let valorEntrada = 1;
    let unidadeEntrada = 'kg';
    let unidadeSaida = 'g';
    let valorSaida = 1000;

    const conversoes = {
        kg: { g: 1000, lb: 2.20462, oz: 35.274 },
        g: { kg: 0.001, lb: 0.00220462, oz: 0.035274 },
        lb: { kg: 0.453592, g: 453.592, oz: 16 },
    };

    function converter() {
        if (unidadeEntrada === unidadeSaida) {
            valorSaida = valorEntrada;
        } else {
            valorSaida = valorEntrada * conversoes[unidadeEntrada][unidadeSaida];
        }
    }
</script>

<main>
    <div class="conversor">
        <h2>Conversor de Peso</h2>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorEntrada} on:input={converter} />
            <select bind:value={unidadeEntrada} on:change={converter}>
                <option value="kg">Quilogramas</option>
                <option value="g">Gramas</option>
                <option value="lb">Libras</option>
            </select>
        </div>
        <span class="igual">=</span>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorSaida} readonly />
            <select bind:value={unidadeSaida} on:change={converter}>
                <option value="kg">Quilogramas</option>
                <option value="g">Gramas</option>
                <option value="lb">Libras</option>
            </select>
        </div>
    </div>
</main>

<style>
    .conversor {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-family: Arial, sans-serif;
    }

    h2 {
        margin-bottom: 20px;
        color: #333;
    }

    .grupo-entrada {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 10px 0;
    }

    input {
        width: 100px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-align: center;
        font-size: 1rem;
    }

    select {
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 1rem;
        background: white;
        cursor: pointer;
    }

    .igual {
        font-size: 1.5rem;
        font-weight: bold;
        color: #555;
    }
</style>
