import { createClient } from 'contentful'
import type { RequestHandler } from '@sveltejs/kit'

export const contentful = createClient({
  space: 'vb8d8nqavgo6',
  accessToken: 'j__74MmkL9qeR_oaiPoFVj5MmXsu0H8QbH6WI_I9S00'
})

export const get: RequestHandler = async (request) => {
  return {
    body: await contentful.getEntry('2ZqXhnyr1p8XcClBDO3Lss')
  }
}