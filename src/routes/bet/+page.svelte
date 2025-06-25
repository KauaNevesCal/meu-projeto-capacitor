<script>
	function escolherPagina(pagina) {
		if (pagina === 'roleta') {
			window.location.href = '/bet/roleta';
		} else if (pagina === 'num') {
			window.location.href = '/bet/num';
		}
	}
</script>

<div class="container">
	<div class="logo">Corinthians Bet</div>
	<h1>🎰Bem-vindo🎰</h1>
	<h2>Escolha um dos jogos abaixo:</h2>

	<div class="botoes">
		<button on:click={() => escolherPagina('roleta')} class="botao-opcao roleta">
			🌀Roleta🌀
		</button>
		<button on:click={() => escolherPagina('num')} class="botao-opcao gerador">
			🎲Gerador Aleatório🎲
		</button>
	</div>
</div>

<style>
	main {
		margin: 0;
		padding: 0;
		font-family: 'Segoe UI', sans-serif;
		background: linear-gradient(135deg, #111, #222);
		color: rgb(255, 255, 255);
	}

	.container {
		text-align: center;
		padding-top: 80px;
	}

	h1 {
		font-size: 30px;
		margin-bottom: 10px;
		color: #000000;
	}

	h2 {
		font-size: 22px;
		color: #aaa;
		margin-bottom: 25px;
        margin-top: 20px;
	}

	.botoes {
		display: flex;
		justify-content: center;
		gap: 40px;
		flex-wrap: wrap;
	}

	.botao-opcao {
		width: 260px;
		height: 80px;
		font-size: 22px;
		cursor: pointer;
		border: none;
		border-radius: 12px;
		color: white;
		font-weight: bold;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
	}

	.botao-opcao:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 14px rgba(0, 0, 0, 0.6);
	}

	.roleta {
		background-color: #991a0c;
	}

	.gerador {
		background-color: #000000;
	}

    .logo {
	font-size: 32px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 2px;
	background: linear-gradient(90deg, #c0392b, #441414, #a01616);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	color: transparent;
	margin-bottom: 20px;
    margin-top: -40px;
}

</style>