import { Mail, Shield, SmartHome } from '@nxweb/icons/tabler';

import type { VerticalNavItemsType } from '@layouts/types.js';

export const navigation: readonly VerticalNavItemsType[] = [
  {
    icon: <SmartHome />,
    id: 'home',
    link: '/home',
    text: 'Home'
  },
  {
    icon: <Mail />,
    id: 'products',
    link: '/products',
    text: 'Products'
  },
  {
    action: 'read',
    icon: <Shield />,
    id: 'acl-page',
    link: '/acl',
    subject: 'acl-page',
    text: 'Access Control'
  }
];
