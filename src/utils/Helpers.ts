import { JWT_AUTH } from '@/constants/common';
import type { Auth } from '@/interfaces/auth.interface';
import { routing } from '@/libs/i18nNavigation';
import Cookies from 'js-cookie';

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === routing.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

export const parseAuthFromCookie = () => {
  const authStringify = Cookies.get(JWT_AUTH);
  const auth = JSON.parse(authStringify || '{}');
  return auth as Auth;
};

export const isPromise = (value: any) => {
  return Boolean(value && typeof value.then === 'function');
};
