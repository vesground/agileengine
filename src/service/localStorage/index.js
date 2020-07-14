import { storageFactory } from './storageFactory';

export const localStore = storageFactory(window.localStorage);
