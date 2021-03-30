import { SERVER_URL } from './constants';

export const getMediaFileFromServer = (fileName) => `${SERVER_URL}/${fileName}`;
