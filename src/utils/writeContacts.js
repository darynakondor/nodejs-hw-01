import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
         const data = JSON.stringify(updatedContacts, null, 2);
        
         await fs.writeFile(PATH_DB, data);
         console.log('Done');
        
    } catch (error) {
        console.error(error);
    }
};