import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { DatabaseSchema } from './types';


const file = '/Users/sunil/Work/GitHub/book-phone/src/_utils/data/db.json'; // path to your JSON file
const adapter = new JSONFile<DatabaseSchema>(file); // Specify the type here
const db = new Low<DatabaseSchema>(adapter, { phones: [{
    "brand": "Samsung",
    "model": "Galaxy S10",
    "os_version": "Android 9.0",
    "screen_size": "6.1 inches",
    "available": true,
    "booking_info": null,
    "id": 1
}] }); // Use the generic type


export { db };

