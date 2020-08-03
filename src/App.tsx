import React from 'react'
import { Row, Col } from 'antd'
import SearchCard from './components/SearchCard'
import styled from 'styled-components'
import SearchResults from './components/SearchResults'

const StyledRow = styled(Row)`
  padding: 20px;
  background-color: skyblue;
  min-height: 100vh;
`

function App() {
  return (
    <StyledRow gutter={16}>
      <Col span={8}>
        <SearchCard />
      </Col>
      <Col span={16}>
        <SearchResults />
      </Col>
    </StyledRow>
  )
}

export default App
