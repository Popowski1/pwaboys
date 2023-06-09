import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) => {const jateDb = await openDB('jate', 1);
                                            const tx = jateDb.transaction('jate', 'readwrite');
                                            const objStore = tx.objectStore('jate');
                                            const req = objStore.put({ id: id, value: value })
                                            const res = await req;
                                            console.log(res);};
  
  
  console.error('putDb not implemented, we had issues lads');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) => {const jateDb = await openDB('jate', 1);
const tx = jateDb.transaction('jate', 'readwrite');
const objStore = tx.objectStore('jate');
const req = objStore.getAll()
const res = await req;
console.log(res);};
console.error('getDb not implemented, we had issues lads');

initdb();
