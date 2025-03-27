import { JWT_AUTH } from '@/constants/common';
import type { Auth } from '@/interfaces/auth.interface';
import { parseAuthFromCookie } from '@/utils/Helpers';
import Cookies from 'js-cookie';
import { isEmpty } from 'lodash';

class AuthService {
  getAuthStorage() {
    const auth = parseAuthFromCookie();
    return isEmpty(auth) ? undefined : auth;
  }

  saveAuthToStorage(user: Auth) {
    Cookies.set(JWT_AUTH, JSON.stringify(user));
  }

  clearAuthStorage() {
    Cookies.remove(JWT_AUTH);
  }
}

export default new AuthService();
