import React, { useContext } from 'react'
import { useQuery } from 'react-apollo'
import { List, Card } from 'antd'
import VisibilitySensor from 'react-visibility-sensor'
import { getSearchQuery, GetSearchVariables, GetSearch, SearchResult } from '../gql/queries/search'
import { StoreContext } from '../context'

const SearchResults = () => {
  const store = useContext(StoreContext)
  const { data, loading, fetchMore } = useQuery<GetSearch, GetSearchVariables>(getSearchQuery, {
    variables: {
      ingredients: store.ingredientQuery,
      query: store.coursesQuery,
      page: 1,
    },
    skip: !store.ingredientQuery && !store.coursesQuery,
  })
  const results = data && data.search ? data.search.results : []

  const onVisibilityChange = (isVisible: boolean) => {
    if (!isVisible) return

    fetchMore({
      variables: {
        ingredients: store.ingredientQuery,
        query: store.coursesQuery,
        page: results.length / 10 + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev

        return {
          search: {
            ...prev.search,
            results: [...prev.search.results, ...fetchMoreResult.search.results],
          },
        }
      },
    })
  }

  return (
    <Card>
      <List
        loading={loading}
        itemLayout="vertical"
        size="large"
        dataSource={results}
        renderItem={(item: SearchResult, index: number) => {
          console.log('index', index)
          const Comp = (
            <List.Item
              key={`${item.title}-${index}`}
              extra={<img height={100} alt={item.title} src={item.thumbnail} />}
            >
              <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
              {item.ingredients}
            </List.Item>
          )
          return index + 3 === results.length ? (
            <VisibilitySensor onChange={onVisibilityChange}>{Comp}</VisibilitySensor>
          ) : (
            Comp
          )
        }}
      />
    </Card>
  )
}

export default SearchResults
