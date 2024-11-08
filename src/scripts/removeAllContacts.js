import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { countContacts } from "./countContacts.js";

export const removeAllContacts = async () => {
    try {
        const count = await countContacts()
        if(count > 0) {
            const emptyContacts = [];
            await writeContacts(emptyContacts);
            console.log("All contacts are deleted");
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.error(error);
        
    }
};

removeAllContacts();
