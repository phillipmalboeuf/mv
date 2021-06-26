<script lang="ts">
  import type { Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'
  import Logo from './icons/Logo.svelte'

  export let navigation: Entry<{
    sinscrire: string,
    lienInfolettre: string,
    gauche: RichTextContent, milieu: RichTextContent, droite: RichTextContent
  }>
</script>


<footer id="contact">
  <div class="logo">
    <Logo />
  </div>
  <nav>
    <div>
      <Document body={navigation.fields.gauche} />
    </div>
    <div>
      <Document body={navigation.fields.milieu} />
    </div>
    <div>
      <Document body={navigation.fields.droite} />
      <!-- <a class="button" href={navigation.fields.lienInfolettre}>{navigation.fields.sinscrire}</a> -->
    </div>
  </nav>
  <nav>
    <div>
      <a href="https://facebook.com" target="_blank">
        <svg width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M4.16488 27.9993V15.2256H0V10.2578H4.1448V6.58141C4.1448 2.32179 6.64875 -0.000697359 10.3018 -0.000697359C11.5362 -0.00590472 12.7706 0.061791 14 0.197182V4.64948H11.4609C9.4638 4.64948 9.08244 5.63367 9.08244 7.07611V10.2578H13.8344L13.2122 15.2256H9.10753V27.9993" fill="white"/> </g> <defs> <clipPath id="clip0"> <rect width="14" height="28" fill="white"/> </clipPath> </defs> </svg>
      </a>
      <a href="https://linkedin.com" target="_blank">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.376653 7.63439H5.14277V23H0.376653V7.63439ZM2.76212 0C4.28805 0 5.52425 1.23932 5.52425 2.7691C5.52425 4.29888 4.28805 5.5382 2.76212 5.5382C1.2362 5.5382 0 4.29888 0 2.7691C0 1.23932 1.2362 0 2.76212 0Z" fill="white"/>
        <path d="M8.13184 7.63394H12.6951V9.73497H12.7821C13.714 8.13741 15.4428 7.18856 17.2874 7.25633C22.1163 7.25633 23 10.4369 23 14.5712V22.9995H18.2387V15.5298C18.2387 13.7482 18.2097 11.4536 15.7663 11.4536C13.3229 11.4536 12.9076 13.39 12.9076 15.399V22.9995H8.15115L8.13184 7.63394Z" fill="white"/>
        </svg>
      </a>
    </div>
    <div>
      <small>© Maillon Vert. Tous les droits sont réservés.</small>
    </div>
  </nav>
</footer>

<style lang="scss">
  footer {
    padding: var(--gutter);
    background: var(--dark-0);
  }

  footer :global(h2),
  footer :global(h4) {
    color: var(--white);
  }

    .logo {
      padding: 0 calc(var(--gutter) + 4vw);
      margin: 2rem 0;

      @media (max-width: 900px) {
        padding: 0;
      }
    }

    nav {
      display: flex;
      // justify-content: space-between;
      padding: 2rem 0;

      a {
        padding: 0.5rem;
      }

      div {
        padding: 0 calc(var(--gutter) + 4vw);

        @media (max-width: 900px) {
          padding: 0;
        }
      }

      @media (max-width: 900px) {
        flex-direction: column;
        row-gap: var(--gutter);
      }
    }
</style>