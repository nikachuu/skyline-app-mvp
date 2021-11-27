import axios, { AxiosError } from 'axios';
import { AuthParams } from '../../../models/AuthParams';
import { AuthUserModel } from '../../../models/AuthUserModel';
import { AuthReponseModel } from '../../../models/AuthReponseModel';
import Api from '../../../constants/Api';
import { mapFireBaseAuthToAuthUser, mapRefeshTokenToAuthUser } from '../../../models/AuthUserModel.dto';
import { LocalStorageService } from '../service/loca.storage.service.impl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RefreshTokenReponseModel } from '../../../models/RefreshTokenReponseModel';
import { AuthResponseErrorModel } from '../../../models/AuthResponseErrorModel';
import { AuthException } from './auth.exceptions';

export class AuthDataSource {

  private readonly localStorageService: LocalStorageService;

  constructor() {
    this.localStorageService = new LocalStorageService(AsyncStorage);
  }

  public async signIn(user: AuthParams): Promise<AuthUserModel> {
    return new Promise<AuthUserModel>((resolve, reject) => {
      axios.post<AuthReponseModel>(Api.Resource.signin, user)
        .then((data) => {
          const loggedUser = JSON.stringify(mapFireBaseAuthToAuthUser(data.data));
          this.localStorageService.set('authData', loggedUser);
          resolve(mapFireBaseAuthToAuthUser(data.data));
        })
        .catch((error: any) => {
          this.catchError(error, reject);
        })
    });
  }

  public async siginUp(user: AuthParams): Promise<void> {
    try {
      await axios.post(Api.Resource.signUp, user);
    } catch (error: any) {
      const authException = new AuthException();
      const errorData: AuthResponseErrorModel = error.response.data.error;
      authException.mapAuthExceptionToString(errorData.errors).forEach((e) => {
        throw new Error(e);
      });
    }
  }

  public async refreshToken(refreshToken: string): Promise<AuthUserModel> {
    return new Promise<AuthUserModel>((resolve, reject) => {
      axios.post<RefreshTokenReponseModel>(
        Api.Resource.refreshToken,
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }
      ).then((userData) => {
        const newUserData = JSON.stringify(mapRefeshTokenToAuthUser(userData.data));
        this.localStorageService.set('authData', newUserData);
        resolve(mapRefeshTokenToAuthUser(userData.data));
      })
      .catch((error) => {
        this.catchError(error, reject);
      });
    });
  }

  private catchError(error: any, reject: (reason?: any) => void) {
    const authException = new AuthException();
    console.log(error.request);
    const errorData: AuthResponseErrorModel = error?.response?.data?.error;
    authException.mapAuthExceptionToString(errorData.errors).forEach((e) => {
      reject(e);
    });
  }

  public async isLoggedUser(): Promise<boolean> {
    const storage = await this.localStorageService.get('authData');
    const hasToken = storage?.authToken != null;
    const isExpiredToken = Date.now() > storage?.expiresIn;
    return hasToken && isExpiredToken;
  }
}