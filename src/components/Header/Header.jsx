import React from 'react';
import styled from 'styled-components'

const Head = styled('div')`
  background: #93c90eff;
  height: 50px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
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