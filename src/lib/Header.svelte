<script lang="ts">
  import type { Entry } from 'contentful'
  import Logo from './icons/Logo.svelte'
import Menu from './Menu.svelte'

  export let page: Entry<{ titre: string, sections: Entry<{ titre: string, id?: string }>[] }>
  // export let navigation: Entry<{ contactezNous: string, courriel: string }>
</script>


<header>
  <a href="/#top" class="logo">
    <Logo />
  </a>
  <nav>
    {#each page.fields.sections.filter(section => section.fields.id) as section}
    <a href={`#${section.fields.id}`}>{section.fields.titre}</a>
    {/each}
    <a href={`#contact`}>Contact</a>
  </nav>

  <Menu sections={page.fields.sections} />
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

    padding: 1rem var(--gutter);
    background: var(--dark-faded);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  a.logo {
    position: relative;
    z-index: 2;

    @media (max-width: 900px) {
      max-width: 8rem;

      :global(svg) {
        width: 100%;
        height: 33%;
      }
    }
  }

    nav {
      display: flex;

      a {
        padding: 0.5rem 1rem;
      }

      @media (max-width: 900px) {
       display: none;
      }
    }
</style>