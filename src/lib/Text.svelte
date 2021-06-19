<script lang="ts">
	import type { Asset, Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'
	import Picture from './Picture.svelte'

	export let text: { titre: string, body?: RichTextContent, icon?: Asset }
</script>

<center>
{#if text.icon}<figure><Picture media={text.icon} /></figure>{/if}
{#if text.titre}<h2>{text.titre}</h2>{/if}
{#if text.body}<Document body={text.body} />{/if}
</center>

<style>
	center {
		width: 88%;
		margin: 0 auto;
	}

	figure {
		padding: var(--gutter);
		max-width: 33rem;
	}
</style>