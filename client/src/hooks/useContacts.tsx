import { useEffect, useState } from 'react';
import { ContactsApi } from '../api/Contacts';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  const handleGetData = async () => {
    const data = await ContactsApi.find();
    setContacts(data);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return { contacts };
};

export default useContacts;
