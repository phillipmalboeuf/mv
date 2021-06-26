<script lang="ts">
	import type { Asset, Entry, RichTextContent } from 'contentful'

	export let form: { nom: string, courriel: string, mabonner: string, listUrl: string }
</script>

<form target="_blank" action={form.listUrl} method="POST">
  <input id="name" name="name" placeholder={form.nom} />
  <input id="email" type="email" name="email" placeholder={form.courriel} />
  <button type="submit">{form.mabonner}</button>
</form>

<style lang="scss">
  form {
    width: 100%;
    padding: 6rem var(--gutter) var(--gutter);
    max-width: 666px;
  }
</style>