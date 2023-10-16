import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Footer() {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <Container maxWidth="sm">
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            &copy; {new Date().getFullYear()} EKYC. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
