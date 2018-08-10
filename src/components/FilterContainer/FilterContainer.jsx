import React from 'react';
import styled from 'styled-components'

const FilterBlock = styled('div')`
  background: white;
  min-height: 50px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  color:white;
  font-size: 2em;
  display: grid;
  grid-template-rows: 1fr 3fr;
   @media (max-width: 499px) {grid-template-rows: 1fr 5fr;}
`

const FilterBlockHeader = styled('div')`
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
`

const FilterBlockBody = styled('div')`
  overflow: auto;
  display: grid;
  grid-gap: 10px;
  padding: 15px;
  grid-template-columns: repeat(7, 1fr);
  @media (max-width: 499px) {grid-template-columns: repeat(3, 1fr);}
  @media (min-width: 500px) {}
  @media (min-width: 700px) {}
 
`

const FilterBlockBodyCard = styled('div')`
  color: black;
  max-width: 100px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: grid;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  cursor: pointer;
  }
  padding: 5.8px;
`

const FilterBlockBodyHeader = styled('div')`
  font-size: 0.9rem;
`
const FilterBlockBodyNumber = styled('div')`
  font-size: 2rem;
`

export const FilterContainer = (props) => {
	return (
		<FilterBlock>
		  <FilterBlockHeader>FILTER CLUSTERS</FilterBlockHeader>
      <FilterBlockBody>
      <FilterBlockBodyCard>
        <FilterBlockBodyHeader>
        All Clusters
        </FilterBlockBodyHeader>
        <FilterBlockBodyNumber>
        150
        </FilterBlockBodyNumber>
      </FilterBlockBodyCard>
      <FilterBlockBodyCard>1</FilterBlockBodyCard>
      <FilterBlockBodyCard>1</FilterBlockBodyCard>
      <FilterBlockBodyCard>1</FilterBlockBodyCard>
      <FilterBlockBodyCard>1</FilterBlockBodyCard>
      <FilterBlockBodyCard>1</FilterBlockBodyCard>
      <FilterBlockBodyCard>1</FilterBlockBodyCard>
      </FilterBlockBody>
		</FilterBlock>
	)
}