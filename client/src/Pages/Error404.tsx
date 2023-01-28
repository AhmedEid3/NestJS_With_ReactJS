import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import NavRoutes from '../Routes/Routes';

const Error404 = () => {
  return (
    <Container>
      <Typography variant="h1">404</Typography>
      <Button variant="contained" component={Link} to={NavRoutes.homeLink}>
        back to home
      </Button>
    </Container>
  );
};

export default Error404;
