import * as prismic from '@prismicio/client'

export async function get({}) {
  const client = prismic.createClient('claire')
  const document = await client.getByUID('page-2', 'homepage')

  if (document) {
    return {
      body: { document },
    }
  }

  return {
    status: 404,
  }
}
