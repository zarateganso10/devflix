import React from 'react';

import Footer from '../Footer';
import Header from './../Header';

import styled from 'styled-components';


const Main = styled.main`
  margin-top: 94px;
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;


export default function PageDefault({ children }){
    return(
        <>
            <Header />
                <Main>
                    { children }
                </Main>
            <Footer />
        </>
        
    )
}