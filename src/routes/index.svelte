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
	import type { Entry, RichTextContent } from 'contentful'
	import Text from '$lib/Text.svelte'
	import Hero from '$lib/Hero.svelte'
	import Sections from '$lib/Sections.svelte'
	import LogoAnimation from '$lib/icons/LogoAnimation.svelte'

	export let page: Entry<{
		titre: string
		sections: Entry<{ titre: string, sousTitre: string, introduction: string, id?: string, sections?: Entry<{ titre: string, id?: string, text?: RichTextContent }>[] }>[]
	}>
</script>

{#each page.fields.sections as section}
{#if section.sys.contentType.sys.id === 'hero'}
<section>
	<Hero hero={section.fields} />
	<!-- <LogoAnimation /> -->
</section>
{:else if section.sys.contentType.sys.id === 'text'}
<Text text={section.fields} />
{:else if section.sys.contentType.sys.id === 'page'}
<section id={section.fields.id}>
	{#if section.fields.sousTitre}
	<center>
		<h6>{section.fields.titre}</h6>
		<h2>{section.fields.sousTitre}</h2>
	</center>
	{/if}
	{#if section.fields.introduction}
	<center>
		<p class="big">{section.fields.introduction}</p>
	</center>
	{/if}
	{#if section.fields.sections}<Sections sections={section.fields.sections} />{/if}
</section>
{/if}
{/each}

<style lang="scss">
	section {
		min-height: 666px;
		scroll-margin-top: 10rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: var(--dark-1);
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
		}
</style>
