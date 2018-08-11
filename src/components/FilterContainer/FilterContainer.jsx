import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";
import { MiniCard } from "../MiniCard/MiniCard";

const FilterBlock = styled('div')`
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  color:white;
  font-size: 2em;
  display: grid;
  @media (max-width: 499px) {grid-template-rows: 30px 1fr;}
`

const FilterBlockHeader = styled('div')`
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
`

const FilterBlockBody = styled('div')`
  display: grid;
  grid-gap: 10px;
  padding: 15px;
  @media (max-width: 499px) {grid-template-columns: repeat(3, 1fr);}
  @media (min-width: 500px) {  grid-template-columns: repeat(6, 1fr);}
  @media (min-width: 700px) {  grid-template-columns: repeat(6, 1fr);}
 
`
export const FilterContainer = (props) => {
	return (
		<FilterBlock>
		  <FilterBlockHeader>FILTER CLUSTERS</FilterBlockHeader>
      <FilterBlockBody>
      { props.clusterErrors.map((item, index) => 
        <MiniCard key={`card- ${index}`} cardData={item} listFunc={props.filter} />
        )}
      </FilterBlockBody>
		</FilterBlock>
	)
}

FilterContainer.propTypes = {
  clusterErrors: PropTypes.array
};