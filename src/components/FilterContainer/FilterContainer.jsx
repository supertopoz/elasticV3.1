import React from 'react';
import styled from 'styled-components'

const FilterBlock = styled('div')`
  background: white;
  min-height: 50px;
  box-shadow: 0px 2px 4px 1px #00000091;
  color:white;
  font-size: 2em;
  display: grid;
  grid-template-rows: 2fr 5fr;
`

const FilterBlockHeader = styled('div')`
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
`


export const FilterContainer = (props) => {
	return (
		<FilterBlock>
		  <FilterBlockHeader>FILTER CLUSTERS</FilterBlockHeader>
		</FilterBlock>
	)
}