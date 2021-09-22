import { AuthError, FirebaseAuthError } from "../../../models/AuthResponseErrorModel";

export class AuthException {

  private exceptions;

  constructor() {
    this.exceptions = new Map();
    this.exceptions.set('TOKEN_EXPIRED', 'A credencial do usuário não é mais válida. O usuário deve entrar novamente.');
    this.exceptions.set('USER_DISABLED', 'A conta do usuário foi desabilitada por um administrador.');
    this.exceptions.set('USER_NOT_FOUND', 'O usuário correspondente ao token de atualização não foi encontrado. É provável que o usuário tenha sido excluído.');
    this.exceptions.set('INVALID_REFRESH_TOKEN', 'Um token de atualização inválido é fornecido.');
    this.exceptions.set('INVALID_GRANT_TYPE', 'O tipo de concessão especificado é inválido.');
    this.exceptions.set('MISSING_REFRESH_TOKEN', 'Nenhum token de atualização fornecido.');
    this.exceptions.set('EMAIL_EXISTS', 'O endereço de e-mail já está sendo usado por outra conta.');
    this.exceptions.set('OPERATION_NOT_ALLOWED', 'Login de senha desabilitado para este projeto.');
    this.exceptions.set('TOO_MANY_ATTEMPTS_TRY_LATER', 'Bloqueamos todas as solicitações deste dispositivo devido a atividade incomum. Tente mais tarde.');
    this.exceptions.set('EMAIL_NOT_FOUND', 'Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.');
    this.exceptions.set('INVALID_PASSWORD', 'A senha é inválida ou o usuário não possui uma senha.');
  }

  

  public mapAuthExceptionToString(errors: FirebaseAuthError[]): string[] {
    return errors.map((e) => this.exceptions.get(e.message));
  }

}