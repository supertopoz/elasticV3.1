import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";

const ClusterBodyHeaderContainer = styled('div')`
  display:grid;
  border: 1px; solid;
  grid-template-columns: 5fr 1fr;
  padding: 10px;
  background: #93c90eff;
`
const ClusterBodyHeaderTitle = styled('div')`
  font-size: 0.8rem;
  text-align: left;
    color: white;
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
      <ClusterBodyHeaderTitle>{`Cluster Name: ${props.clusterName}`}</ClusterBodyHeaderTitle>
      <ClusterBodyHeaderDeployment>
      <ClusterBodyButton>{`Deployed ${props.snapshotsHealth} `}</ClusterBodyButton>
      </ClusterBodyHeaderDeployment>
    </ClusterBodyHeaderContainer>
   )
}