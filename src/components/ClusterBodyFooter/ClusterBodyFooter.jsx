import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";

const ClusterBodyFooterContainer = styled('div')`
  padding-top: 10px;
  display: grid;
  grid-gap: 10px;
  @media (min-width: 499px) {grid-template-columns: 1fr;}
  @media (min-width: 500px) { grid-template-columns: 1fr;}
  @media (min-width: 700px) {grid-template-columns: 1fr 2fr;}
  color: #616161;
  font-size: 1rem;
  text-align: left;
`
const ClusterBodyFooterKibana = styled('div')`
  font-size: 0.7rem;

`
const ClusterBodyFooterDetails = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 0.7rem;
`
const ClusterBodyFooterDetailsUser = styled('div')``
const ClusterBodyFooterDetailsVersion = styled('div')``
const ClusterBodyFooterDetailsRegion = styled('div')`
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

export const ClusterBodyFooter = (props) => {
    return (
     <ClusterBodyFooterContainer>
     <ClusterBodyFooterKibana> <ClusterBodyButton>{`Kibana: ${props.kibana}`}</ClusterBodyButton></ClusterBodyFooterKibana>
     <ClusterBodyFooterDetails>
        <ClusterBodyFooterDetailsUser>{`USER ID: ${props.userId}`}</ClusterBodyFooterDetailsUser>
        <ClusterBodyFooterDetailsVersion>{`VERSION: ${props.version}`}</ClusterBodyFooterDetailsVersion>
         <ClusterBodyFooterDetailsRegion>{`REGION: ${props.region}`}</ClusterBodyFooterDetailsRegion>
     </ClusterBodyFooterDetails>
     </ClusterBodyFooterContainer>
     )
}