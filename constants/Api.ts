import { AUTH_BASE_URL, BASE_URL, API_KEY, SECURE_BASE_URL } from '../core/config/config.app';

const events = `${BASE_URL}/events.json/?auth=[AUTH_TOKEN]`;

const signUp = () => AUTH_BASE_URL
  .replace('[AUTH_MODE]', 'signUp')
  .replace('[API_KEY]', API_KEY);

const signIn = () => AUTH_BASE_URL
  .replace('[AUTH_MODE]', 'signInWithPassword')
  .replace('[API_KEY]', API_KEY);

const refreshToken = () => SECURE_BASE_URL
  .replace('[API_KEY]', API_KEY);

export const addTokenToRequest = (url: string, token: string) => url.replace('[AUTH_TOKEN]', token);

export default {
  Resource: {
    events,
    signUp: signUp(),
    signin: signIn(),
    refreshToken: refreshToken(),
  }
}