<script>
  let valorEntrada = 1;
  let unidadeEntrada = 'km';
  let unidadeSaida = 'm';
  let valorSaida = 1000;

  const conversoes = {
      km: { m: 1000, mi: 0.621371, ft: 3280.84 },
      m: { km: 0.001, mi: 0.000621371, ft: 3.28084 },
      mi: { km: 1.60934, m: 1609.34, ft: 5280 },
      ft: { km: 0.0003048, m: 0.3048, mi: 0.000189394 }
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
      <h2>Conversor de Distância</h2>
      <div class="grupo-entrada">
          <input type="number" bind:value={valorEntrada} on:input={converter} />
          <select bind:value={unidadeEntrada} on:change={converter}>
              <option value="km">Quilômetros</option>
              <option value="m">Metros</option>
              <option value="mi">Milhas</option>
              <option value="ft">Pés</option>
          </select>
      </div>
      <span class="igual">=</span>
      <div class="grupo-entrada">
          <input type="number" bind:value={valorSaida} readonly />
          <select bind:value={unidadeSaida} on:change={converter}>
              <option value="km">Quilômetros</option>
              <option value="m">Metros</option>
              <option value="mi">Milhas</option>
              <option value="ft">Pés</option>
          </select>
      </div>
  </div>
</main>

<style>
  main {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      background-color: #f4f4f9;
      font-family: Arial, sans-serif;
      margin: 0;
  }

  .conversor {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
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
