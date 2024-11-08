import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();
        const newContacts = Array.from({length: number}, createFakeContact);
        const updatedContacts = [...contacts, ...newContacts];

        await writeContacts(updatedContacts)

        console.log(updatedContacts);
    } catch (error) {
        console.error(error);
    }
};

generateContacts(5);
