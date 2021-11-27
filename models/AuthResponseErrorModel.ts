export interface AuthResponseErrorModel {
  code: number;
  errors: FirebaseAuthError[]
}

export interface FirebaseAuthError {
  domain: string;
  message: string;
  reason: string;
}

export interface AuthError {
  type: string;
  message: string;
}