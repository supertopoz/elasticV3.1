import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";


const ClusterBodyCardsContainer = styled('div')`
  display: grid;
  grid-gap: 3px;
  @media (min-width: 499px) {grid-template-columns: 1fr;}
  @media (min-width: 500px) {grid-template-columns: repeat(4, 1fr)}
  @media (min-width: 700px) {}
`

const ClusterBodyCard = styled('div')`
  border: 1px solid lightgrey;
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
const ClusterBodyCardHeader = styled('div')`
  font-size: 0.7rem;
  display: grid;
  padding:10px;
  text-align: left;
  grid-template-columns: 3fr 1fr;
`
const ClusterBodyCardHeaderTitle = styled('div')``
const ClusterBodyCardHeaderIcon = styled('div')`
  text-align: right;
  font-size: 1rem;
`
const ClusterBodyCardDetails = styled('div')`
  font-size: 0.7rem;
  text-align: left;
  display: grid;
  padding: 10px;
  grid-gap: 2px;
  @media (max-width: 499px) {grid-template-columns: 1fr 1fr 1fr;}
  @media (min-width: 500px) { grid-template-columns: 1fr;}
  @media (min-width: 700px) {grid-template-columns: 1fr;}
`

export const ClusterBodyCards = () => {
	return (
    <ClusterBodyCardsContainer>
      <ClusterBodyCard>
        <ClusterBodyCardHeader>
          <ClusterBodyCardHeaderTitle>Cluster Status</ClusterBodyCardHeaderTitle>
          <ClusterBodyCardHeaderIcon>♥</ClusterBodyCardHeaderIcon>
        </ClusterBodyCardHeader>
        <ClusterBodyCardDetails>
            <div>Running</div>
            <div>Master(1)</div>
            <div>Monitoring</div>
        </ClusterBodyCardDetails>       
      </ClusterBodyCard>
            <ClusterBodyCard>
        <ClusterBodyCardHeader>
          <ClusterBodyCardHeaderTitle>Cluster Status</ClusterBodyCardHeaderTitle>
          <ClusterBodyCardHeaderIcon>♥</ClusterBodyCardHeaderIcon>
        </ClusterBodyCardHeader>
        <ClusterBodyCardDetails></ClusterBodyCardDetails>       
      </ClusterBodyCard>
            <ClusterBodyCard>
        <ClusterBodyCardHeader>
          <ClusterBodyCardHeaderTitle>Cluster Status</ClusterBodyCardHeaderTitle>
          <ClusterBodyCardHeaderIcon>♥</ClusterBodyCardHeaderIcon>
        </ClusterBodyCardHeader>
        <ClusterBodyCardDetails></ClusterBodyCardDetails>       
      </ClusterBodyCard>
            <ClusterBodyCard>
        <ClusterBodyCardHeader>
          <ClusterBodyCardHeaderTitle>Cluster Status</ClusterBodyCardHeaderTitle>
          <ClusterBodyCardHeaderIcon>♥</ClusterBodyCardHeaderIcon>
        </ClusterBodyCardHeader>
        <ClusterBodyCardDetails></ClusterBodyCardDetails>       
      </ClusterBodyCard>
     </ClusterBodyCardsContainer>
		)
}