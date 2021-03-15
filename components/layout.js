import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
`;

const Layout = ({ children }) => (
    <Container>{children}</Container>
);

export default Layout;
