
import type { RequestHandler } from '@sveltejs/kit'
import { contentful } from './page.json'

export const get: RequestHandler = async (request) => {
  return {
    body: await contentful.getEntry('5BpsBFSd2qH9zi9quA0li2')
  }
}