import axios, { AxiosError } from 'axios';
import { AuthParams } from '../../../models/AuthParams';
import { AuthUserModel } from '../../../models/AuthUserModel';
import { AuthReponseModel } from '../../../models/AuthReponseModel';
import Api from '../../../constants/Api';
import { mapFireBaseAuthToAuthUser } from '../../../models/AuthUserModel.dto';
import { LocalStorageService } from '../service/loca.storage.service.impl';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthDataSource {

  private readonly localStorageService: LocalStorageService;

  constructor() {
    this.localStorageService = new LocalStorageService(AsyncStorage);
  }
  
  public signIn(user: AuthParams): Promise<AuthUserModel> {
    return new Promise<AuthUserModel>((resolve, reject) => {
      axios.post<AuthReponseModel>(Api.Resource.signin, user)
        .then((user) => {
          const loggedUser = JSON.stringify(mapFireBaseAuthToAuthUser(user.data));
          this.localStorageService.set('authData', loggedUser);
          resolve(mapFireBaseAuthToAuthUser(user.data))
        }).catch((error) => reject(error));
    });
  }

  public async siginUp(user: AuthParams): Promise<void> {
    try {
      await axios.post(Api.Resource.signUp, user);
    } catch (error) {
      throw new Error(`Ocorreu um erro ${error}`);
    }
  }

  public async isLoggedUser() {
    return (await this.localStorageService.get('authData'))?.authToken != null;
  }
}