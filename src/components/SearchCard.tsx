import React, { useContext, useState } from 'react'
import { Card, Input, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { StoreContext } from '../context'

const InputWrapper = styled.div`
  margin-bottom: 20px;
  > input,
  .ant-input-group-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
`

const SearchCard = () => {
  const store = useContext(StoreContext)
  const [ingredientQuery, setIngredientQuery] = useState(store.ingredientQuery.split(','))
  const [coursesQuery, setCoursesQuery] = useState(store.coursesQuery)

  return (
    <Card title="Search">
      <InputWrapper>
        Course name:
        <Input name="courseName" value={coursesQuery} onChange={(e) => setCoursesQuery(e.target.value)} />
      </InputWrapper>
      <InputWrapper>
        Ingredients:
        {ingredientQuery.map((ingredient, index) => (
          <Input
            key={index}
            name={`ingredient-${index}`}
            disabled={index !== ingredientQuery.length - 1}
            value={ingredient}
            addonAfter={
              index !== ingredientQuery.length - 1 ? (
                <DeleteOutlined onClick={() => setIngredientQuery((prev) => prev.filter((p) => p !== ingredient))} />
              ) : null
            }
            onChange={(e) => {
              e.persist()
              setIngredientQuery((prev) => {
                const prevSliced = prev.slice(0, -1)
                return [...prevSliced, e.target.value]
              })
            }}
          />
        ))}
        <StyledButton
          name="add-ingredient"
          disabled={!ingredientQuery[ingredientQuery.length - 1]}
          onClick={() => setIngredientQuery((prev) => [...prev, ''])}
        >
          Add ingredient
        </StyledButton>
      </InputWrapper>
      <StyledButton
        name="search"
        type="primary"
        onClick={() => store.setSearchQuery({ ingredientQuery: ingredientQuery.join(','), coursesQuery })}
      >
        Search
      </StyledButton>
    </Card>
  )
}

export default SearchCard
