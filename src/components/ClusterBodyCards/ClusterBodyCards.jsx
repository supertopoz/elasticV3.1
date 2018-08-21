import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";
import { Heart } from "../Icons/Icons";

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
  padding-left:10px;
  padding-right:10px;
  text-align: left;
  grid-template-columns: 3fr 1fr;
`
const ClusterBodyCardHeaderTitle = styled('div')`
  padding-top: 10px;
`
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
  @media (max-width: 499px) {grid-template-columns: 1fr 1fr; }
  @media (min-width: 500px) { grid-template-columns: 1fr; }
  @media (min-width: 700px) {grid-template-columns: 1fr; }
`

export const ClusterBodyCards = (props) => {
     const instanceHealth = !(props.cluster.instances.count.total - props.cluster.instances.count.running);
  return (
  <ClusterBodyCardsContainer>
    <ClusterBodyCard>
      <ClusterBodyCardHeader>
        <ClusterBodyCardHeaderTitle>Cluster Status</ClusterBodyCardHeaderTitle>
        <ClusterBodyCardHeaderIcon><Heart bolee={props.cluster.healthy}/></ClusterBodyCardHeaderIcon>
      </ClusterBodyCardHeader>
      <ClusterBodyCardDetails>
        <div>Running: <Heart bolee={props.cluster.isStopped}/></div>
        <div>{`Master(${props.cluster.master.count})`} <Heart bolee={props.cluster.master.healthy}/></div>
        <div>Monitoring Enabled: <Heart bolee={props.cluster.monitoring.enabled}/></div>
      </ClusterBodyCardDetails>       
      </ClusterBodyCard>
      <ClusterBodyCard>
        <ClusterBodyCardHeader>
          <ClusterBodyCardHeaderTitle>{`Instance (${props.cluster.instances.count.total})`}</ClusterBodyCardHeaderTitle>
          <ClusterBodyCardHeaderIcon><Heart bolee={instanceHealth}/></ClusterBodyCardHeaderIcon>
        </ClusterBodyCardHeader>
        <ClusterBodyCardDetails>
          <div>{`Running: ${props.cluster.instances.count.running}`}</div>
        </ClusterBodyCardDetails>       
      </ClusterBodyCard>
      <ClusterBodyCard>
        <ClusterBodyCardHeader>
          <ClusterBodyCardHeaderTitle>{`Shards (${props.cluster.shards.count.total})`}</ClusterBodyCardHeaderTitle>
          <ClusterBodyCardHeaderIcon><Heart bolee={props.cluster.shards.healthy}/></ClusterBodyCardHeaderIcon>
        </ClusterBodyCardHeader>
        <ClusterBodyCardDetails>
          <div>{`Available: ${JSON.stringify(props.cluster.shards.count.available)}`}</div>
        </ClusterBodyCardDetails>       
      </ClusterBodyCard>
        <ClusterBodyCard>
        <ClusterBodyCardHeader>
          <ClusterBodyCardHeaderTitle>{`Snapshots (${JSON.stringify(props.cluster.snapshots.count.total)})`}</ClusterBodyCardHeaderTitle>
          <ClusterBodyCardHeaderIcon><Heart bolee={props.cluster.snapshots.healthy}/></ClusterBodyCardHeaderIcon>
        </ClusterBodyCardHeader>
        <ClusterBodyCardDetails>
          <div>{`Latest: ${props.cluster.snapshots.latest.time}`}</div>
          <div>Last snapshot completed: <Heart bolee={props.cluster.snapshots.latest.success}/></div>
        </ClusterBodyCardDetails>       
    </ClusterBodyCard>
  </ClusterBodyCardsContainer>
  )
}

ClusterBodyCards.propTypes = {
  cluster: PropTypes.object
};