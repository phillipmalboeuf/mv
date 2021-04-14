<script lang="ts">
	import type { Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'

	export let hero: { titre: string, text?: RichTextContent }
</script>

<h1>{hero.titre}</h1>
<Document body={hero.text} />