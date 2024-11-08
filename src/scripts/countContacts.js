import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const countContacts = contacts ? contacts.length : 0;
        return countContacts;
    } catch (error) {
        console.error(error);  
    }
};

console.log(await countContacts());
