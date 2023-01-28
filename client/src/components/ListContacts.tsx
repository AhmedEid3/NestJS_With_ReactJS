import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/Inbox';

import useContacts from '../hooks/useContacts';

export default function ListContacts() {
  const { contacts } = useContacts();

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        {contacts.map((c: any) => (
          <ListItem key={c.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={c.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
