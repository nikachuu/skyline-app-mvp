import { AUTH_BASE_URL, BASE_URL, API_KEY } from '../core/config/config.app';

const events = `${BASE_URL}/events`;

const signUp = () => AUTH_BASE_URL
  .replace('[AUTH_MODE]', 'signUp')
  .replace('[API_KEY]', API_KEY);

const signIn = () => AUTH_BASE_URL
  .replace('[AUTH_MODE]', 'signInWithPassword')
  .replace('[API_KEY]', API_KEY);

export default {
  Resource: {
    events,
    signUp: signUp(),
    signin: signIn(),
  }
}