<script lang="ts">
	import type { Asset, Entry, RichTextContent } from 'contentful'

	export let form: { nom: string, courriel: string, termsEtConditions: string, mabonner: string, listUrl: string }
  let checked: boolean
</script>

<form target="_blank" action={form.listUrl} method="POST">
  <input id="name" name="name" placeholder={form.nom} />
  <input id="email" type="email" name="email" placeholder={form.courriel} />
  <input id="check" type="checkbox" name="check" placeholder={form.courriel} bind:checked />
  <label for="check">{form.termsEtConditions}</label>
  <button type="submit" disabled={!checked}>{form.mabonner}</button>
</form>

<style lang="scss">
  form {
    width: 100%;
    padding: 6rem var(--gutter) var(--gutter);
    max-width: 666px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    input[type="checkbox"] {
      appearance: none;
      cursor: pointer;
      width: auto;
      margin: 0;
      border: 1px solid var(--light-1);

      &:checked {
        padding: 0 0.21em;

        &:before {
          content: "+";
          font-weight: bold;
          color: var(--light-1);
        }
      }

      + label {
        cursor: pointer;
        flex: 1;
        font-size: 16px;
        line-height: 1.25;
        color: var(--light-1);
        padding: 0 1rem;
      }
    }

    button {
      &[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }
    }

    @media (max-width: 900px) {
      padding-top: 3rem;
      // flex-direction: column;

      input[type="checkbox"] + label {
        flex: 66%;
      }

      button {
        display: block;
        margin: 2rem auto 0;
      }
    }
  }
</style>