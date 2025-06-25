<script>
	let nome = '';
	let nomes = [];
	let sorteado = null;
	let erro = '';

	function adicionarNome() {
		if (nome.trim() === '') return;
		nomes = [...nomes, nome.trim()];
		nome = '';
		sorteado = null;
	}

	function removerNome(index) {
		nomes = nomes.filter((_, i) => i !== index);
		sorteado = null;
	}

	function sortear() {
		if (nomes.length === 0) {
			erro = 'Adicione pelo menos um nome!';
			return;
		}
		erro = '';
		const index = Math.floor(Math.random() * nomes.length);
		sorteado = nomes[index];
	}
</script>

<div class="container">
	<h1>🎯 Sorteio de Nomes</h1>

	<input type="text" placeholder="Digite um nome" bind:value={nome} on:keydown={(e) => e.key === 'Enter' && adicionarNome()} />
	<button class="adicionar" on:click={adicionarNome}>Adicionar</button>

	{#if nomes.length > 0}
		<ul>
			{#each nomes as n, i}
				<li>
					{n}
					<button class="remover" on:click={() => removerNome(i)}>Remover</button>
				</li>
			{/each}
		</ul>

		<button class="sortear" on:click={sortear}>Sortear Nome</button>
	{/if}

	{#if erro}
		<p class="erro">{erro}</p>
	{:else if sorteado}
		<p class="resultado">🎉 Nome Sorteado: <strong>{sorteado}</strong></p>
	{/if}
</div>

<style>
	.container {
		max-width: 600px;
		margin: 60px auto;
		text-align: center;
		color: white;
        background: linear-gradient(60deg, #c0392b, #441414, #a01616);
        min-height: 600px;
        border-radius: 15px;
	}

	h1 {
		font-size: 40px;
		margin-bottom: 20px;
        padding-top: 30px;
	}

	input {
		padding: 10px;
		width: 70%;
		font-size: 16px;
		border-radius: 6px;
		border: none;
		margin-bottom: 10px;
	}

	button {
		padding: 10px 20px;
		margin: 5px;
		font-size: 16px;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-weight: bold;
	}

	.adicionar {
		background-color: #2980b9;
		color: white;
	}
	.sortear {
		background-color: #27ae60;
		color: white;
	}

	.remover {
		background-color: #c0392b;
		color: white;
		font-size: 12px;
		padding: 5px 10px;
		margin-left: 10px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin-top: 20px;
	}

	li {
		margin: 5px 0;
	}

	.resultado {
		font-size: 28px;
		color: #f1c40f;
		margin-top: 30px;
	}

	.erro {
		color: red;
		margin-top: 20px;
	}
</style>