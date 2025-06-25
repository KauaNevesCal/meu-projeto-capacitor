<script>
	let min = 1;
	let max = 100;
	let resultado = null;
	let erro = '';

	function gerar() {
		if (isNaN(min) || isNaN(max) || min >= max) {
			erro = 'Verifique os valores do intervalo (mínimo deve ser menor que o máximo).';
			resultado = null;
			return;
		}

		erro = '';
		resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	}

    function voltar() {
		if (history.length > 1) {
			history.back();
		} else {
			goto('/bet');
		}
	}

</script>

<button on:click={voltar} style="margin-top: 1rem;  border-radius: 4px;">← Voltar</button>

<div style="text-align: center; margin-top: 60px;">
	<h1>🎲 Gerador Aleatório</h1>

	<div style="margin: 20px;">
		<label>Mínimo:</label>
		<input type="number" bind:value={min} style="margin: 10px; padding: 5px; width: 80px;" />

		<label>Máximo:</label>
		<input type="number" bind:value={max} style="margin: 10px; padding: 5px; width: 80px;" />
	</div>

	<button on:click={gerar} style="padding: 10px 20px; font-size: 18px; border-radius: 4px;">
		Gerar Número
	</button>

	{#if erro}
		<p style="color: red; margin-top: 20px;">{erro}</p>
	{:else if resultado !== null}
		<h2 style="margin-top: 30px;">Resultado: <span style="color: #2ecc71;">{resultado}</span></h2>
	{/if}
</div>
