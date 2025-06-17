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
</script>

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
