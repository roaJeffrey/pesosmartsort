import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('686cb291002616694112');

export const account = new Account(client);
export { ID } from 'appwrite';
