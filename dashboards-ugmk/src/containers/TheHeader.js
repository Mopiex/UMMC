import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import {
  TheHeaderDropdown,
} from './index'

import { LOCALES } from 'src/i18n'
import translate from './../i18n/translate';

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)
  const locale = useSelector(state => state.locale)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const enBtn = React.useRef();
  const ruBtn = React.useRef();

  React.useEffect(() => {
    if (locale === LOCALES.ENGLISH) {
      ruBtn.current.classList.remove('active');
      enBtn.current.classList.add('active');
    } else {
      enBtn.current.classList.remove('active');
      ruBtn.current.classList.add('active');
    }
  }, [locale])

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />

      <CHeaderNav className="mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">{translate('dashboard')}</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>{translate('settings')}</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdown />
      </CHeaderNav>

      <div className="langChoose">
        <span ref={enBtn} className="active" onClick={
          () => {
            dispatch({ type: 'set-locale', locale: LOCALES.ENGLISH });
          }
        }>EN</span>
              |
        <span ref={ruBtn} onClick={
          () => {
            dispatch({ type: 'set-locale', locale: LOCALES.RUSSIAN });
          }
        }>RU</span>
      </div>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard"
          >
            <CIcon name="cil-graph" alt="Dashboard" />&nbsp;{translate('dashboard')}
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />&nbsp;{translate('settings')}
          </CLink>
        </div>
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
