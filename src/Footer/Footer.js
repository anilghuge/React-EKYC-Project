import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Footer() {
  return (
    <footer>
      <Container maxWidth="sm">
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} EKYC. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
