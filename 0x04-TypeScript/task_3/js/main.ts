/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row id ${newRowID}`);

// Updated row (explicit, not spread)
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);

