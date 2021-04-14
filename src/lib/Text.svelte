<script lang="ts">
	import type { Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'

	export let text: { titre: string, body?: RichTextContent }
</script>

{#if text.titre}<h2>{text.titre}</h2>{/if}
{#if text.body}<Document body={text.body} />{/if}