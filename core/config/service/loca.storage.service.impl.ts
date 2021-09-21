import { ILocalStorageService } from './local.storage.service';
import { AuthUserModel } from '../../../models/AuthUserModel';

export class LocalStorageService implements ILocalStorageService {
  service: any;

  constructor(
    service: any,
  ){
    this.service = service;
  }

  set = async (
    key: string,
    value: string
  ) => {
    try {
      await this.service.setItem(key, value);
    } catch (error) {
      throw new Error(`Erro ao salva -> ${error}`);
    }
  };

  get = async (key: string): Promise<AuthUserModel> => {
    try {
      const data = await this.service.getItem(key);
      return JSON.parse(data);
    } catch (error) {
      throw new Error(`Erro ao pegar -> ${error}`);
    }
  };

}