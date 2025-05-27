<script>
    let valorEntrada = 1;
    let unidadeEntrada = 'Hz';
    let unidadeSaida = 'kHz';
    let valorSaida = 0.001;

    const conversoes = {
        Hz: { kHz: 0.001, MHz: 1e-6, GHz: 1e-9 },
        kHz: { Hz: 1000, MHz: 1e-3, GHz: 1e-6 },
        MHz: { Hz: 1e6, kHz: 1000, GHz: 1e-3 },
        GHz: { Hz: 1e9, kHz: 1e6, MHz: 1000 }
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
        <h2>Conversor de Frequência</h2>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorEntrada} on:input={converter} />
            <select bind:value={unidadeEntrada} on:change={converter}>
                <option value="Hz">Hertz (Hz)</option>
                <option value="kHz">Kilohertz (kHz)</option>
                <option value="MHz">Megahertz (MHz)</option>
                <option value="GHz">Gigahertz (GHz)</option>
            </select>
        </div>
        <span class="igual">=</span>
        <div class="grupo-entrada">
            <input type="number" bind:value={valorSaida} readonly />
            <select bind:value={unidadeSaida} on:change={converter}>
                <option value="Hz">Hertz (Hz)</option>
                <option value="kHz">Kilohertz (kHz)</option>
                <option value="MHz">Megahertz (MHz)</option>
                <option value="GHz">Gigahertz (GHz)</option>
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
