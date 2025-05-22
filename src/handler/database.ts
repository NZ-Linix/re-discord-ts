import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {

  apiKey: "",

  authDomain: "",

  databaseURL: "",

  projectId: "",

  storageBucket: "",

  messagingSenderId: "",

  appId: ""

};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

import {
    ref as dbRef,
    set as dbSet,
    get as dbGet,
    update as dbUpdate,
    remove as dbRemove
} from 'firebase/database'
import config from '../config';

export const set = (path: string, data: unknown) =>
  dbSet(dbRef(db, path), data)

export const get = (path: string) =>
  dbGet(dbRef(db, path)).then(snapshot => snapshot.val())

export const update = (path: string, data: Partial<unknown>) =>
  dbUpdate(dbRef(db, path), data)

export const remove = (path: string) =>
  dbRemove(dbRef(db, path))