import React from 'react';
import styled from 'styled-components'

const Head = styled('div')`
  background: #93c90eff;
  height: 50px;
  box-shadow: 0px 2px 4px 1px #00000091;
  color:white;
  font-size: 2em;
  padding-top: 25px;
`


export const Header = (props) => {
	return (
		<Head>
		Elastic
		</Head>
	)
}