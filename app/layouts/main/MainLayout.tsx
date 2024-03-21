import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';


const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Box sx={{
      fontFamily: "Inter"
    }}>
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
    </Box>
  )
}

export default MainLayout;
