import { AuthReponseModel } from "./AuthReponseModel"
import { AuthUserModel } from "./AuthUserModel"
import { RefreshTokenReponseModel } from './RefreshTokenReponseModel';

export const mapFireBaseAuthToAuthUser = (user: AuthReponseModel):AuthUserModel => {
  return {
    authToken: user.idToken,
    refreshToken: user.refreshToken,
    expiresIn: Date.now() + (parseInt(user.expiresIn) * 1000),
    userId: user.localId,
  }
}

export const mapRefeshTokenToAuthUser = (data: RefreshTokenReponseModel):AuthUserModel => {
  return {
    authToken: data.id_token,
    refreshToken: data.refresh_token,
    expiresIn: parseInt(data.expires_in),
    userId: data.user_id,
  }
}