
import type { RequestHandler } from '@sveltejs/kit'
import { contentful } from './page.json'

export const get = async (request) => {
  return {
    body: await contentful.getEntry('5BpsBFSd2qH9zi9quA0li2')
  }
}