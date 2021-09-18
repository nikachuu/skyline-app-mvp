import { AuthReponseModel } from "./AuthReponseModel"
import { AuthUserModel } from "./AuthUserModel"

export const mapFireBaseAuthToAuthUser = (user: AuthReponseModel):AuthUserModel => {
  return {
    authToken: user.idToken,
    refreshToken: user.refreshToken,
    expiresIn: parseInt(user.expiresIn),
  }
}