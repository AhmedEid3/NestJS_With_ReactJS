import { Container, Typography } from '@mui/material';
import ListContacts from '../components/ListContacts';

export const Home = () => {
  return (
    <Container>
      <Typography variant="h1">Home</Typography>
      <ListContacts />
    </Container>
  );
};
