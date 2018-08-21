import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

import { Heart } from "../Icons/Icons";

export const ClusterBodyFooterContainer = styled('div')`
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
export const ClusterBodyFooterKibana = styled('div')`
  font-size: 0.7rem;

`
export const ClusterBodyFooterDetails = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 0.7rem;
`
export const ClusterBodyFooterDetailsUser = styled('div')``
export const ClusterBodyFooterDetailsVersion = styled('div')``
export const ClusterBodyFooterDetailsRegion = styled('div')``

export const ClusterBodyButton = styled('div')`
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
      <ClusterBodyFooterKibana>
        <ClusterBodyButton>Kibana: 
          <Heart bolee={props.kibana}/>
        </ClusterBodyButton>
      </ClusterBodyFooterKibana>
      <ClusterBodyFooterDetails>
        <ClusterBodyFooterDetailsUser>{`USER ID: ${props.userId}`}</ClusterBodyFooterDetailsUser>
        <ClusterBodyFooterDetailsVersion>{`VERSION: ${props.version}`}</ClusterBodyFooterDetailsVersion>
        <ClusterBodyFooterDetailsRegion>{`REGION: ${props.region}`}</ClusterBodyFooterDetailsRegion>
      </ClusterBodyFooterDetails>
    </ClusterBodyFooterContainer>
  );
}