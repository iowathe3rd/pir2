import {Box, Container} from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Header from './Header';


const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Box sx={{
      fontFamily: "Inter"
    }}>
      <Header/>
      <Container component={'main'}>
        {children}
      </Container>
    </Box>
  )
}

export default MainLayout;
