<script>
	import { dicionario, palavras, getRandomWord } from '$lib/dicio/data.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let termo = '';
	let filtro = '';
	let palavraDoDia = '';
	let filtradas = [];

	onMount(() => {
		palavraDoDia = getRandomWord();
		aplicarFiltro();
	});

	function aplicarFiltro() {
		filtradas = palavras.filter((p) => p.startsWith(filtro));
	}

	function buscar() {
		if (termo in dicionario) {
			goto(`/dicionario/${termo}`);
		}
	}

	function irPara(p) {
		goto(`/dicionario/${p}`);
	}
</script>

<h1>Dicionário</h1>

<section>
	<h2>Palavra do Dia: <a class="pdia" on:click={() => irPara(palavraDoDia)}>{palavraDoDia}</a></h2>
</section>

<section>
	<input bind:value={termo} placeholder="Buscar palavra..." />
	<button on:click={buscar}>Buscar</button>

	<br /><br />

	<input bind:value={filtro} placeholder="Filtrar..." on:input={aplicarFiltro} />
</section>

<section>
	<h3>Palavras ({filtradas.length})</h3>
	<ul>
		{#each filtradas as p}
			<li><a class="palavras" on:click={() => irPara(p)}>{p}</a></li>
		{/each}
	</ul>
</section>

<style>
	.pdia {
		font-weight: 900;
		color: black;
		text-decoration: none;
	}

	h1 {
		font-style: italic;
		text-align: center;
		font-size: 50px;
		text-decoration: underline;
	}

	.palavras {
		text-decoration: none;
		color: black;
		font-weight: 500;
	}

	button {
		border-radius: 5px;
		box-shadow: 2px 3px 5px 0px;
		background-color: rgb(35, 70, 145);
		color: white;
		width: 100px;
	}
</style>
