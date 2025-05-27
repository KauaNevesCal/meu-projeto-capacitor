<script>
  import { page } from '$app/stores';

  const links = [
    { href: '/appconversoru', label: 'Inicio' },
    { href: '/appconversoru/area', label: 'Área' },
    { href: '/appconversoru/distancia', label: 'Distância' },
    { href: '/appconversoru/moeda', label: 'Moeda' },
    { href: '/appconversoru/peso', label: 'Peso' },
    { href: '/appconversoru/temperatura', label: 'Temperatura' },
    { href: '/appconversoru/tempo', label: 'Tempo' },
    { href: '/appconversoru/velocidade', label: 'Velocidade' },
    { href: '/appconversoru/frequencia', label: 'Frequência' },
  ];
</script>

{#if $page.url.pathname !== '/appconversoru'}
  <nav class="navbar">
    <div class="nav-container">
      <ul>
        {#each links as { href, label }}
          <li class="{ $page.url.pathname === href ? 'active' : '' } { href === '/appconversoru' ? 'highlight' : '' }">
            <a href={href}>{label}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
{/if}

<main>
  <slot />
</main>

<style>
  .navbar {
    background: #672b3e;
    padding: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 2rem;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .nav-container {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
  }

  .nav-container::-webkit-scrollbar {
    display: none;
  }

  .navbar ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navbar li {
    border-radius: 5px;
    flex-shrink: 0;
  }

  .navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 5px;
  }

  .active a {
    background-color: #4d202f;
    color: rgb(255, 255, 255);
  }

  .highlight a {
    background-color: #330404;
    color: #ffffff;
  }
</style>
