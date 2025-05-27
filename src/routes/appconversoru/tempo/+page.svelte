<script>
    let valorEntrada = 1;
    let unidadeEntrada = 'h';
    let unidadeSaida = 'min';
    let valorSaida = 60;

    const conversoes = {
        h: { min: 60, s: 3600, dia: 1/24, ano: 1/8760 },
        min: { h: 1/60, s: 60, dia: 1/1440, ano: 1/525600 },
        s: { h: 1/3600, min: 1/60, dia: 1/86400, ano: 1/31536000 },
        dia: { h: 24, min: 1440, s: 86400, ano: 1/365 },
        ano: { h: 8760, min: 525600, s: 31536000, dia: 365 }
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
        <h2>Conversor de Tempo</h2>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorEntrada} on:input={converter} />
            <select bind:value={unidadeEntrada} on:change={converter}>
                <option value="h">Horas</option>
                <option value="min">Minutos</option>
                <option value="s">Segundos</option>
                <option value="dia">Dias</option>
                <option value="ano">Anos</option>
            </select>
        </div>
        <span class="igual">=</span>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorSaida} readonly />
            <select bind:value={unidadeSaida} on:change={converter}>
                <option value="h">Horas</option>
                <option value="min">Minutos</option>
                <option value="s">Segundos</option>
                <option value="dia">Dias</option>
                <option value="ano">Anos</option>
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