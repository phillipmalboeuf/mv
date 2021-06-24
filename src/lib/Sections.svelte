<script lang="ts">
	import type { Entry, RichTextContent } from 'contentful'
  import Columns from './Columns.svelte'
  import Hero from './Hero.svelte'
  import NewsletterForm from './NewsletterForm.svelte'
  import Parcours from './Parcours.svelte'
  import Slider from './Slider.svelte'
  import Text from './Text.svelte'

	export let sections: Entry<any>[]
</script>


{#each sections as section}
{#if section.sys.contentType.sys.id === 'hero'}
<Hero hero={section.fields} />
{:else if section.sys.contentType.sys.id === 'text'}
<Text text={section.fields} />
{:else if section.sys.contentType.sys.id === 'slider'}
<Slider slides={section.fields.slides} noLines={!section.fields.ligne} />
{:else if section.sys.contentType.sys.id === 'colonnes'}
<Columns columns={section.fields.colonnes} />
{:else if section.sys.contentType.sys.id === 'parcours'}
<Parcours titre={section.fields.titre} animations={section.fields.animations} />
{:else if section.sys.contentType.sys.id === 'newsletterForm'}
<NewsletterForm form={section.fields} />
{/if}
{/each}