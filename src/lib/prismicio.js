import * as prismic from '@prismicio/client'

// Repository name
export const repositoryName = 'claire'

export const createClient = ({ request, fetch } = {}) => {
  const client = prismic.createClient(repositoryName, { fetch })

  if (request) {
    client.enableAutoPreviewsFromReq(request)
  }

  return client
}

export const linkResolver = (doc) => {
  return '/'
}
