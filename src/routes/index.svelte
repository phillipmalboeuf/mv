<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	export const load = async ({ fetch }) => {
		const res = await fetch('page.json')

		return {
			props: {
				page: await res.json()
			}
		}
	}

</script>

<script lang="ts">
	import type { Asset, Entry, RichTextContent } from 'contentful'
	import Text from '$lib/Text.svelte'
	import Hero from '$lib/Hero.svelte'
	import Sections from '$lib/Sections.svelte'
	import Pluses from '$lib/icons/Pluses.svelte'

	export let page: Entry<{
		titre: string
		sections: Entry<{ titre: string, sousTitre: string, introduction: string, id?: string, sections?: Entry<{ titre: string, id?: string, text?: RichTextContent }>[] }>[]
	}>
</script>

{#each page.fields.sections as section, i}
{#if section.sys.contentType.sys.id === 'hero'}
<section id={i === 0 && '#top'}>
	<Hero hero={section.fields} />
</section>
{:else if section.sys.contentType.sys.id === 'text'}
<Text text={section.fields} />
{:else if section.sys.contentType.sys.id === 'page'}
<section id={section.fields.id} class:left={section.fields.sections?.length > 0 && (section.fields.sections[0].sys.contentType.sys.id === 'parcours' || section.fields.sections[0].sys.contentType.sys.id === 'newsletterForm')} class:row={section.fields.sections?.length > 0 && (section.fields.sections[0].sys.contentType.sys.id === 'newsletterForm')}>
	{#if section.fields.titre && section.fields.sousTitre}
	<center>
		<h6>{section.fields.titre}</h6>
		<h2>{section.fields.sousTitre}</h2>
		{#if section.fields.introduction}<p class="big">{section.fields.introduction}</p>{/if}
	</center>
	{:else if section.fields.titre}
	<center>
		{#if section.fields.id !== 'a-propos'}<h2>{section.fields.titre}</h2>{/if}
		{#if section.fields.introduction}<p class="big">{section.fields.introduction}</p>{/if}
	</center>
	{/if}
	{#if section.fields.sections}<Sections sections={section.fields.sections} />{/if}

	{#if section.fields.id === 'a-propos'}
	<Pluses />
	{/if}
</section>
{/if}
{/each}

<style lang="scss">
	section {
		position: relative;
		min-height: 666px;
		scroll-margin-top: 8rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 10vw 0;
		background-color: var(--dark-1);

		@media (max-width: 900px) {
			padding: 10vh 0;
		}
	}

		section.row {
			flex-direction: row;

			@media (max-width: 900px) {
				flex-direction: column;
			}
		}

	section:nth-child(2n) {
		background-color: var(--dark-2);
	}

	// div {
	// 	display: flex;
	// 	align-items: center;
	// 	column-gap: var(--gutter);
	// }

		center {
			width: 50%;
			padding: 0 var(--gutter);

			@media (max-width: 900px) {
				width: 100%;
			}
		}

		section.left:not(.row) {
			align-items: flex-start;
			padding: 10vw 4vw;

			@media (max-width: 900px) {
				padding: 10vh 4vw;
			}
		}

		section.left center {
			text-align: left;
		}
</style>
