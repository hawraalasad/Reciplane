import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.backgroundColor};
`;

const ContentContainer = styled.div`
  padding-top: 60px; // Adjust this value based on your navbar height
`;

const PageLayout = ({ backgroundColor, children }) => {
  return (
    <PageContainer backgroundColor={backgroundColor}>
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
