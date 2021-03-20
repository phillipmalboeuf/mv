<script lang="ts">
  import type { Entry } from 'contentful'
  export let page: Entry<{ titre: string }>
</script>


<header>
  <h2>{page.fields.titre}</h2>
  <nav>
    <a href="#section-0">À-propos</a>
    <a href="#section-1">Services</a>
    <a href="#section-2">Clients</a>
  </nav>

  <button>Contactez-nous</button>
</header>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: var(--gutter);
  }

    nav {
      display: flex;

      a {
        padding: 0.5rem;
      }
    }
</style>