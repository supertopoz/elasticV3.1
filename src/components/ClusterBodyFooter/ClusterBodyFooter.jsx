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
`
const ClusterBodyFooterDetailsUser = styled('div')`
font-size: 0.7rem;
`
const ClusterBodyFooterDetailsVersion = styled('div')`
font-size: 0.7rem;
`
const ClusterBodyFooterDetailsRegion = styled('div')`
font-size: 0.7rem;
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

export const ClusterBodyFooter = () => {
    return (
     <ClusterBodyFooterContainer>
     <ClusterBodyFooterKibana> <ClusterBodyButton>Create Kabana</ClusterBodyButton></ClusterBodyFooterKibana>
     <ClusterBodyFooterDetails>
        <ClusterBodyFooterDetailsUser>USER ID: 407920</ClusterBodyFooterDetailsUser>
        <ClusterBodyFooterDetailsVersion>Version 1.7.2</ClusterBodyFooterDetailsVersion>
         <ClusterBodyFooterDetailsRegion>Region: us-east-1</ClusterBodyFooterDetailsRegion>
     </ClusterBodyFooterDetails>
     </ClusterBodyFooterContainer>
     )
}