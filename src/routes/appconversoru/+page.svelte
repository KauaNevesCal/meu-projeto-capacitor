<script>
</script>

<main>
    <h1>Conversor de Unidades</h1>
    <div class="container">
        <div class="option"><a href="/appconversoru/area">Área</a></div>
        <div class="option"><a href="/appconversoru/distancia">Distância</a></div>
        <div class="option"><a href="/appconversoru/moeda">Moeda</a></div>
        <div class="option"><a href="/appconversoru/peso">Peso</a></div>
        <div class="option"><a href="/appconversoru/temperatura">Temperatura</a></div>
        <div class="option"><a href="/appconversoru/tempo">Tempo</a></div>
        <div class="option"><a href="/appconversoru/velocidade">Velocidade</a></div>
        <div class="option"><a href="/appconversoru/frequencia">Frequência</a></div>
    </div>
</main>

<style>
    main {
        background-color: #4d202f;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 2rem;
        min-height: 700px;
        max-width: 500px;
        border-radius: 10px;
        align-items: center;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        max-width: 400px;
        margin: 20px auto;
    }

    .option {
        background-color: #672b3e;
        box-shadow: 0 2px 0 4px #33161f;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .option:hover {
        background-color: #333;
    }

    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    a:focus, a:hover {
        color: #ffcc00;
        outline: none;
    }
</style>
