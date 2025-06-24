<script>
	let resultado = null;
	let cor = 'gray';

	const numerosVermelhos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
	const numerosPretos = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

	function girarRoleta() {
		const numeroSorteado = Math.floor(Math.random() * 37); // de 0 a 36
		resultado = numeroSorteado;

		if (numeroSorteado === 0) {
			cor = 'green';
		} else if (numerosVermelhos.includes(numeroSorteado)) {
			cor = 'red';
		} else {
			cor = 'black';
		}
	}
</script>

<div style="text-align: center; margin-top: 50px;">
	<h1>🎰 Roleta da Sorte</h1>
	<button on:click={girarRoleta} style="padding: 10px 20px; font-size: 18px; cursor: pointer;">
		Girar Roleta
	</button>

	{#if resultado !== null}
		<div style="margin-top: 30px;">
			<h2>Resultado:</h2>
			<div style="font-size: 60px; font-weight: bold; color: {cor};">
				{resultado}
			</div>
			<p style="font-size: 20px;">Cor: {cor.toUpperCase()}</p>
		</div>
	{/if}
</div>
