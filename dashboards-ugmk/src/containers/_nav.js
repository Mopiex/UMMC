import React from 'react'
import CIcon from '@coreui/icons-react'
import translate from './../i18n/translate';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: translate('dashboard'),
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  },

  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavItem',
    name: translate('sidebar.login'),
    to: '/login',
  },
  {
    _tag: 'CSidebarNavItem',
    name: translate('sidebar.register'),
    to: '/register',
  },
  {
    _tag: 'CSidebarNavItem',
    name: translate('sidebar.404'),
    to: '/404',
  },
  {
    _tag: 'CSidebarNavItem',
    name: translate('sidebar.500'),
    to: '/500',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
]

export default _nav
