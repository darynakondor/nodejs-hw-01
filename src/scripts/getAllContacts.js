import { readContacts } from "../utils/readContacts.js";
import { countContacts } from "./countContacts.js";

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        const count = await countContacts()
        if (contacts && count > 0) {
            return contacts;
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
    }
};

console.log(await getAllContacts());
