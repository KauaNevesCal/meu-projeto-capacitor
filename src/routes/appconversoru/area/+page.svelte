<script>
    let valorEntrada = 1;
    let unidadeEntrada = 'm2';
    let unidadeSaida = 'km2';
    let valorSaida = 0.000001;

    const conversoes = {
        m2: { km2: 1e-6, cm2: 10000, mm2: 1e6, ha: 0.0001, ac: 0.000247105 },
        km2: { m2: 1e6, cm2: 1e10, mm2: 1e12, ha: 100, ac: 247.105 },
        cm2: { m2: 1e-4, km2: 1e-10, mm2: 100, ha: 1e-6, ac: 2.47105e-5 },
        mm2: { m2: 1e-6, km2: 1e-12, cm2: 0.01, ha: 1e-8, ac: 2.47105e-8 },
        ha: { m2: 10000, km2: 0.01, cm2: 1e8, mm2: 1e10, ac: 2.47105 },
        ac: { m2: 4046.86, km2: 0.00404686, cm2: 4.04686e7, mm2: 4.04686e9, ha: 0.404686 }
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
        <h2>Conversor de Área</h2>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorEntrada} on:input={converter} />
            <select bind:value={unidadeEntrada} on:change={converter}>
                <option value="m2">Metro Quadrado (m²)</option>
                <option value="km2">Kilômetro Quadrado (km²)</option>
                <option value="cm2">Centímetro Quadrado (cm²)</option>
                <option value="mm2">Milímetro Quadrado (mm²)</option>
                <option value="ha">Hectare (ha)</option>
                <option value="ac">Acre (ac)</option>
            </select>
        </div>
        <span class="igual">=</span>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorSaida} readonly />
            <select bind:value={unidadeSaida} on:change={converter}>
                <option value="m2">Metro Quadrado (m²)</option>
                <option value="km2">Kilômetro Quadrado (km²)</option>
                <option value="cm2">Centímetro Quadrado (cm²)</option>
                <option value="mm2">Milímetro Quadrado (mm²)</option>
                <option value="ha">Hectare (ha)</option>
                <option value="ac">Acre (ac)</option>
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