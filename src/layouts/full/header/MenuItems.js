import {
  IconBadge,
  IconChessKnight,
  IconLayoutDashboard,
  IconLogin,
  IconMicroscope,
  IconTestPipe,
  IconUserPlus,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: '메인 페이지',
    icon: IconLayoutDashboard,
    href: '/',
  },
  {
    id: uniqueId(),
    title: '전략 소개',
    icon: IconChessKnight,
    href: '/introduce',
  },
  {
    id: uniqueId(),
    title: '정적 백 테스트',
    icon: IconMicroscope,
    href: '/static-back-test',
  },
  {
    id: uniqueId(),
    title: '동적 백 테스트',
    icon: IconTestPipe,
    href: '/dynamic-back-test',
  },
  {
    id: uniqueId(),
    title: '내 전략',
    icon: IconBadge,
    href: '/my-strategy',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  },
];

export default Menuitems;
