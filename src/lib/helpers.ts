export function couleur(c: string, dark?: boolean) {
  return {
    'Rouge': dark ? '#910048' : '#FF585D',
    'Bleu': dark ? '#006FAB' : '#00C3DD',
    'Jaune': dark ? '#FF671F' : '#FBDD40',
    'Vert': dark ? '#009639' : '#8EDD65',
  }[c]
}