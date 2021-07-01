<script lang="ts">
	import type { Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'
  import { couleur } from './helpers'

	export let columns: Entry<{ titre: string, couleur: string, body: RichTextContent }>[]
  // export let noLines = false
</script>

<div class="columns">
  {#each columns as column, i}
  <article style="--li-color: {couleur(column.fields.couleur)}">
    <h3 style="color: {couleur(column.fields.couleur)}">{column.fields.titre}</h3>
    <svg width="328" height="22" viewBox="0 0 328 22" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5061H139.575L164.006 20.332L189.303 1.5061H328" stroke="{couleur(column.fields.couleur)}" stroke-width="2" stroke-miterlimit="10"/></svg>
    <Document body={column.fields.body} />
  </article>
  {/each}
</div>

<style lang="scss">
  .columns {
    display: flex;
    column-gap: calc(var(--gutter) + 4vw);
    row-gap: var(--gutter);
    padding: 4rem calc(var(--gutter) + 4vw) 0;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }

    article {
      flex: 1;
    }

    h3 {
      text-align: center;
      width: 88%;
      margin: 0 auto 1rem;
    }

    svg {
      width: 100%;
      margin: 1rem 0 2rem;
    }
</style>