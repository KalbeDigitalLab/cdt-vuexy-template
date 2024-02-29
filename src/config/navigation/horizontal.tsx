import { Lock, Mail, Shield, SmartHome } from '@nxweb/icons/tabler';

import type { HorizontalNavItemsType } from '@layouts/types.js';

export const navigation: readonly HorizontalNavItemsType[] = [
  {
    icon: <SmartHome />,
    id: 'home',
    link: '/home',
    text: 'Home'
  },
  {
    icon: <Mail />,
    id: 'second-page',
    link: '/second-page',
    text: 'Second Page'
  },
  {
    action: 'read',
    icon: <Shield />,
    id: 'acl-page',
    link: '/acl',
    subject: 'acl-page',
    text: 'Access Control'
  },
  {
    icon: <Lock />,
    id: 'auth-pages',
    text: 'Auth Pages',
    title: 'Auth Pages',
    children: [
      {
        id: 'login-v1',
        link: '/pages/auth/login-v1',
        text: 'Login v1',
        title: 'Login v1'
      },
      {
        id: 'register-v1',
        link: '/pages/auth/register-v1',
        text: 'Register v1',
        title: 'Register v1'
      },
      {
        id: 'verify-email-v1',
        link: '/pages/auth/verify-email-v1',
        text: 'Verify Email',
        title: 'Verify Email'
      },
      {
        id: 'forgot-password-v1',
        link: '/pages/auth/forgot-password-v1',
        text: 'Forgot Password',
        title: 'Forgot Password'
      },
      {
        id: 'reset-password-v1',
        link: '/pages/auth/reset-password-v1',
        text: 'Reset Password',
        title: 'Reset Password'
      }
    ]
  }
];