import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";
import { ClusterBodyHeader } from "../ClusterBodyHeader/ClusterBodyHeader";
import { ClusterBodyCards } from "../ClusterBodyCards/ClusterBodyCards";
import { ClusterBodyFooter } from "../ClusterBodyFooter/ClusterBodyFooter";


const ClusterCountainer = styled('div')`
  background: white;
  @media (max-width: 499px) {}
  @media (min-width: 500px) { max-height: 300px}
  @media (min-width: 700px) { max-hight: 500px }
  padding: 10px;
  grid-gap: 10px;
  grid-template-rows: 30px 1fr;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  font-size: 2em;
  display: grid;
`

const ClusterContainerInner = styled('div')`
  
  @media (min-width: 500px) { overflow: auto;}
  @media (min-width: 700px) { overflow: auto; }
  display: grid;
  grid-gap: 10px;
`

const ClusterBodyBlock = styled('div')`
  margin: 0 auto;
  padding: 10px;
  border: 1px solid lightgrey;
  display: grid;
  background: white;
  width: 95%;
  grid-gap: 5px;
  @media (max-width: 499px) { grid-template-rows: 1fr 5fr 1fr;}
  @media (min-width: 500px) { grid-template-rows: 40px 1fr 50px; }
  @media (min-width: 700px) { grid-template-rows: 40px 1fr 25px; }

`
const FilterBlockBody = styled('div')`
  overflow: auto;
  display: grid;
  grid-gap: 10px;
  padding: 15px;
  grid-template-columns: repeat(7, 1fr);
  @media (max-width: 499px) {grid-template-columns: repeat(3, 1fr);}
  @media (min-width: 500px) {}
  @media (min-width: 700px) {}
`

const Title = styled('div')`

`
export const ClusterInfoContainer = (props) => {
  const filter = props.clusters[0];
  
  let title = '';
  let filterName = ''
  let clusters = [];
  try {
      filterName = Object.keys(filter)[0]
      title = filterName.split('_').join(' ');
      clusters = props.clusters[0][filterName].clusters;
  } catch (e){}

	return (
		<ClusterCountainer>
    <Title>{title}</Title>
    <ClusterContainerInner>
    { clusters.map((cluster, index) => {
      return (
        <ClusterBodyBlock key={`cluster-body-${index}`}>
        <ClusterBodyHeader clusterName={cluster.displayName} snapshotsHealth={ cluster.snapshots.healthy}/>
        <ClusterBodyCards  cluster={cluster}/>
        <ClusterBodyFooter 
          kibana={cluster.kibana.enabled} 
          userId={cluster.user.id} 
          version={cluster.plan.version}
          region={cluster.regionId}
        />
        </ClusterBodyBlock>
      )

    })}
    </ClusterContainerInner>
		</ClusterCountainer>
	)
}

// ClusterInfoContainer.propTypes = {
//   clusterErrors: PropTypes.array
// };