import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";
import { ClusterBodyHeader } from "../ClusterBodyHeader/ClusterBodyHeader";
import { ClusterBodyCards } from "../ClusterBodyCards/ClusterBodyCards";
import { ClusterBodyFooter } from "../ClusterBodyFooter/ClusterBodyFooter";


const ClusterCountainer = styled('div')`
  background: white;
  min-height: 50px;
  padding: 10px;
  grid-template-rows: 2fr 10fr;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  font-size: 2em;
  display: grid;
`
const ClusterBodyBlock = styled('div')`
  padding: 10px;
  height: 200px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
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
  try {
      title = Object.keys(filter)[0].split('_').join(' ');
  } catch (e){}
  console.log(title)
	return (
		<ClusterCountainer>
    <Title>{title}</Title>
    <ClusterBodyBlock>
    <ClusterBodyHeader/>
    <ClusterBodyCards/>
    <ClusterBodyFooter/>
     </ClusterBodyBlock>
		</ClusterCountainer>
	)
}

// ClusterInfoContainer.propTypes = {
//   clusterErrors: PropTypes.array
// };