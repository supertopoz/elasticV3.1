import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";

const ClusterBodyHeaderContainer = styled('div')`
  display:grid;
  border: 1px; solid;
  grid-template-columns: 5fr 1fr;
  padding: 10px;
`
const ClusterBodyHeaderTitle = styled('div')`
  font-size: 1rem;
  text-align: left;
`
const ClusterBodyHeaderDeployment = styled('div')`
  font-size: 0.7rem;
  align-self: right;
`

const ClusterBodyButton = styled('div')`
  border: 1px solid orange;
  padding: 2px;
  width:100px;
  border-radius: 2px;
  text-align: center;
  background: lightgrey;
  cursor:pointer;
`


export const ClusterBodyHeader = (props) => {
  return(
	 <ClusterBodyHeaderContainer>
      <ClusterBodyHeaderTitle>Name: Bob</ClusterBodyHeaderTitle>
      <ClusterBodyHeaderDeployment>
      <ClusterBodyButton>Deployed</ClusterBodyButton>
      </ClusterBodyHeaderDeployment>
    </ClusterBodyHeaderContainer>
   )
}