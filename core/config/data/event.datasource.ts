import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Api, { addTokenToRequest } from '../../../constants/Api';
import { EventModel } from '../../../models/EventModel';
import { LocalStorageService } from '../service/loca.storage.service.impl';

export class EventDataSource {

  private readonly localStorageService: LocalStorageService;

  constructor() {
    this.localStorageService = new LocalStorageService(AsyncStorage);
  }
  
  public async add(event: EventModel) {
    try {
      const payload = JSON.stringify(event);
      const localAuth = await this.localStorageService.get('authData');
      const url = addTokenToRequest(Api.Resource.events, localAuth?.authToken);
      await axios.post(url, payload);
    } catch (error: any) {
      const errorData = error?.response?.data?.error;
      throw new Error(errorData);
    }
  }
}