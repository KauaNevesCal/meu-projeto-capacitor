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
      filtradas = palavras.filter(p => p.startsWith(filtro));
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
    <h2>Palavra do Dia: <a on:click={() => irPara(palavraDoDia)}>{palavraDoDia}</a></h2>
  </section>
  
  <section>
    <input bind:value={termo} placeholder="Digite uma palavra..." />
    <button on:click={buscar}>Buscar</button>
  
    <br><br>
  
    <input bind:value={filtro} placeholder="Filtro por prefixo (ex: ab)" on:input={aplicarFiltro} />
  </section>
  
  <section>
    <h3>Palavras ({filtradas.length})</h3>
    <ul>
      {#each filtradas as p}
        <li><a on:click={() => irPara(p)}>{p}</a></li>
      {/each}
    </ul>
  </section>
  