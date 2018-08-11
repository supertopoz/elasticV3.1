import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";

const GoodHeart = styled('span')`
  padding-top: 5px;
  color: green;
`

const BadHeart = styled('span')`
  padding-top: 5px;
  color: #e8488b;
`


export const Heart = (props) => {
  if(props.bolee === true){
  	return(
      <GoodHeart>✓</GoodHeart>
  	)
  } else {
  	return (
  	   <BadHeart>✘</BadHeart>
  	)
  }
}

export const ExCheck = (props) => {
	
}