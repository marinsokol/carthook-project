import gql from 'graphql-tag'

export type SearchResult = {
  href: string
  ingredients: string
  thumbnail: string
  title: string
}

export type GetSearch = {
  search: {
    href: string
    results: SearchResult[]
    title: string
    version: string
  }
}

export type GetSearchVariables = {
  ingredients: string
  query: string
  page: number
}

export const getSearchQuery = gql`
  query($ingredients: String!, $query: String!, $page: Number!) {
    search(ingredients: $ingredients, query: $query, page: $page)
      @rest(type: "Search", path: "/?i=:ingredients&q=:query&p=:page") {
      href
      results
      title
      version
    }
  }
`
