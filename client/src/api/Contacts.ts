import { baseUrl } from './baseUrl';

export class ContactsApi {
  static async find() {
    const data = await fetch(baseUrl + 'contacts');
    return await data.json();
  }
}
