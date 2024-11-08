import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { countContacts } from "./countContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        const count = await countContacts();

        if(count > 0) {
            contacts.pop();

            await writeContacts(contacts);

            console.log('Last contact has been removed:', contacts);
        } else {
            console.log('No contacts to remove');
        }
    } catch (error) {
        console.error(error);
        
    }
};

removeLastContact();
