export interface AuthUserModel {
  authToken: string;
  refreshToken: string;
  expiresIn: number;
  userId: string;
}
