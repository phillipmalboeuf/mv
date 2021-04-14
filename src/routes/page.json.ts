import { createClient } from 'contentful'
import type { RequestHandler } from '@sveltejs/kit'

export const contentful = createClient({
  space: '7jkgm436l4wo',
  accessToken: 'ugKXzeLF1K-MNDWUUOAsQ_aNbvD0i-JiQYUUNptCWj4'
})

export const get: RequestHandler = async (request) => {
  return {
    body: await contentful.getEntry('3JN1Nwpa6iDk72LeUQla31', { include: 2 })
  }
}