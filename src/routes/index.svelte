<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	export const load = async ({ page, fetch, session, context }) => {
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
	import LogoAnimation from '$lib/icons/LogoAnimation.svelte'

	export let page: Entry<{
		titre: string
		sections: Entry<{ titre: string, sousTitre: string, introduction: string, id?: string, background: Asset, sections?: Entry<{ titre: string, id?: string, text?: RichTextContent }>[] }>[]
	}>
</script>

{#each page.fields.sections as section}
{#if section.sys.contentType.sys.id === 'hero'}
<section>
	<Hero hero={section.fields} />
</section>
{:else if section.sys.contentType.sys.id === 'text'}
<Text text={section.fields} />
{:else if section.sys.contentType.sys.id === 'page'}
<section id={section.fields.id} style={section.fields.background && `background-image: url(${section.fields.background.fields.file.url}); background-position: center; background-size: contain; background-repeat: no-repeat;`} class:left={section.fields.sections?.length > 0 && (section.fields.sections[0].sys.contentType.sys.id === 'parcours' || section.fields.sections[0].sys.contentType.sys.id === 'newsletterForm')} class:row={section.fields.sections?.length > 0 && (section.fields.sections[0].sys.contentType.sys.id === 'newsletterForm')}>
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
</section>
{/if}
{/each}

<style lang="scss">
	section {
		position: relative;
		min-height: 666px;
		scroll-margin-top: 10rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 10vw 0;
		background-color: var(--dark-1);
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
		}

		section.left center {
			text-align: left;
		}
</style>
