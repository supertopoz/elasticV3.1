import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";


const Card = styled('div')`
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

export const MiniCard = (props) => {
   
  return (
     <Card onClick={()=> console.log(props.cardData.id)}>
        <FilterBlockBodyHeader>
        {props.cardData.name}
        </FilterBlockBodyHeader>
        <FilterBlockBodyNumber>
        {props.cardData.count}
        </FilterBlockBodyNumber>
      </Card>
    )
}

MiniCard.propTypes = {
  cardData: PropTypes.object
};