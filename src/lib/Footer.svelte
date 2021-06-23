<script lang="ts">
  import type { Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'
  import Logo from './icons/Logo.svelte'

  export let navigation: Entry<{
    sinscrire: string,
    lienInfolettre: string,
    gauche: RichTextContent, milieu: RichTextContent, droite: RichTextContent
  }>
</script>


<footer id="contact">
  <Logo />
  <nav>
    <div>
      <Document body={navigation.fields.gauche} />
    </div>
    <div>
      <Document body={navigation.fields.milieu} />
    </div>
    <div>
      <Document body={navigation.fields.droite} />
      <!-- <a class="button" href={navigation.fields.lienInfolettre}>{navigation.fields.sinscrire}</a> -->
    </div>
  </nav>
</footer>

<style lang="scss">
  footer {
    padding: var(--gutter);
    background: var(--dark-0);
  }

    nav {
      display: flex;
      justify-content: space-between;
      padding: 6rem 0;

      a {
        padding: 0.5rem;
      }
    }
</style>