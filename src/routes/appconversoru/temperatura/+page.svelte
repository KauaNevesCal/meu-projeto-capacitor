<script>
    let valorEntrada = 0;
    let unidadeEntrada = 'C';
    let unidadeSaida = 'F';
    let valorSaida = 32;

    function converter() {
        if (unidadeEntrada === unidadeSaida) {
            valorSaida = valorEntrada;
        } else if (unidadeEntrada === 'C' && unidadeSaida === 'F') {
            valorSaida = (valorEntrada * 9/5) + 32;
        } else if (unidadeEntrada === 'C' && unidadeSaida === 'K') {
            valorSaida = valorEntrada + 273.15;
        } else if (unidadeEntrada === 'F' && unidadeSaida === 'C') {
            valorSaida = (valorEntrada - 32) * 5/9;
        } else if (unidadeEntrada === 'F' && unidadeSaida === 'K') {
            valorSaida = (valorEntrada - 32) * 5/9 + 273.15;
        } else if (unidadeEntrada === 'K' && unidadeSaida === 'C') {
            valorSaida = valorEntrada - 273.15;
        } else if (unidadeEntrada === 'K' && unidadeSaida === 'F') {
            valorSaida = (valorEntrada - 273.15) * 9/5 + 32;
        }
    }
</script>

<main>
    <div class="conversor">
        <h2>Conversor de Temperatura</h2>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorEntrada} on:input={converter} />
            <select bind:value={unidadeEntrada} on:change={converter}>
                <option value="C">Celsius (°C)</option>
                <option value="F">Fahrenheit (°F)</option>
                <option value="K">Kelvin (K)</option>
            </select>
        </div>
        <span class="igual">=</span>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorSaida} readonly />
            <select bind:value={unidadeSaida} on:change={converter}>
                <option value="C">Celsius (°C)</option>
                <option value="F">Fahrenheit (°F)</option>
                <option value="K">Kelvin (K)</option>
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