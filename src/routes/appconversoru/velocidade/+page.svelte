<script>
    let valorEntrada = 1;
    let unidadeEntrada = 'kmh';
    let unidadeSaida = 'ms';
    let valorSaida = 0.27778;

    const conversoes = {
        kmh: { ms: 1/3.6, mph: 0.621371, knots: 0.539957 },
        ms: { kmh: 3.6, mph: 2.23694, knots: 1.94384 },
        mph: { kmh: 1.60934, ms: 0.44704, knots: 0.868976 },
        knots: { kmh: 1.852, ms: 0.514444, mph: 1.15078 }
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
        <h2>Conversor de Velocidade</h2>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorEntrada} on:input={converter} />
            <select bind:value={unidadeEntrada} on:change={converter}>
                <option value="kmh">Km/h</option>
                <option value="ms">m/s</option>
                <option value="mph">Milhas/h</option>
                <option value="knots">Nós</option>
            </select>
        </div>
        <span class="igual">=</span>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorSaida} readonly />
            <select bind:value={unidadeSaida} on:change={converter}>
                <option value="kmh">Km/h</option>
                <option value="ms">m/s</option>
                <option value="mph">Milhas/h</option>
                <option value="knots">Nós</option>
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
