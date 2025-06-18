<script>
	export let data;
	import { goto } from '$app/navigation';
	import { dicionario as baseDicionario } from '$lib/dicio/data.js';

	let partes = [];

	if (data.definicao) {
		partes = data.definicao.split(/\b/);
	}

	function clicarPalavra(p) {
		const termo = p.toLowerCase();
		if (termo in baseDicionario) {
			goto(`/dicionario/${termo}`);
		}
	}

	function voltar() {
		if (history.length > 1) {
			history.back();
		} else {
			goto('/dicionario');
		}
	}
</script>

<button on:click={voltar} style="margin-top: 1rem;">← Voltar</button>

<h1>{data.termo}</h1>

{#if data.definicao}
	<p>
		{#each partes as parte}
			{#if parte.toLowerCase() in baseDicionario}
				<a on:click={() => clicarPalavra(parte)} style="cursor:pointer; color:blue;">{parte}</a>
			{:else}
				{parte}
			{/if}
		{/each}
	</p>
{:else}
	<p>Palavra não encontrada no dicionário.</p>
{/if}

<style>
	button {
		border-radius: 5px;
		box-shadow: 2px 3px 5px 0px;
		background-color: rgb(35, 70, 145);
		color: white;
		width: 100px;
	}
</style>
