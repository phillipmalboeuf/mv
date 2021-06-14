<script lang="ts">
  import type { Entry } from 'contentful'
  import Logo from './icons/Logo.svelte'

  export let page: Entry<{ titre: string, sections: Entry<{ titre: string, id?: string }>[] }>
  // export let navigation: Entry<{ contactezNous: string, courriel: string }>
</script>


<header>
  <Logo />
  <nav>
    {#each page.fields.sections.filter(section => section.fields.id) as section}
    <a href={`#${section.fields.id}`}>{section.fields.titre}</a>
    {/each}
    <a href={`#contact`}>Contact</a>
  </nav>

  <!-- <a href="mailto:{navigation.fields.courriel}">{navigation.fields.contactezNous}</a> -->
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
    background: var(--dark-1);
    // backdrop-filter: blur(6px);
    // -webkit-backdrop-filter: blur(6px);
  }

    nav {
      display: flex;

      a {
        padding: 0.5rem 1rem;
      }
    }
</style>