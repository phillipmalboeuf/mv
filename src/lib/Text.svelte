<script lang="ts">
	import type { Asset, Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'
	import Picture from './Picture.svelte'

	export let text: { titre: string, body?: RichTextContent, icon?: Asset }
</script>

<center>
{#if text.icon}<figure><Picture media={text.icon} /></figure>{/if}
<!-- {#if text.titre}<h2>{text.titre}</h2>{/if} -->
{#if text.body}<Document body={text.body} />{/if}
</center>

<style lang="scss">
	center {
		width: 88%;
		margin: 0 auto;

		@media (max-width: 900px) {
			width: 100%;
		}

		:global(h6) {
			margin-top: 2rem;
			color: var(--light-1);
		}
	}

	figure {
		padding: var(--gutter);
		margin: 0;
		max-width: 30rem;
		height: 12rem;
		display: flex;
		align-items: center;

		:global(picture) {
			margin: 0 auto;
			height: 100%;

			:global(img) {
				height: 100%;
			}
		}

		@media (max-width: 900px) {
			// padding: 0;
		}
	}
</style>