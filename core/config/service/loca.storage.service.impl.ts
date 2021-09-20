import { ILocalStorageService } from './local.storage.service';

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

  get = async (key: string) => {
    try {
      return await this.service.getItem(key);
    } catch (error) {
      throw new Error(`Erro ao pegar -> ${error}`);
    }
  };

}