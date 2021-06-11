import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import translate from './../../../i18n/translate';
import { FormattedMessage } from 'react-intl';

const Page500 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <span className="clearfix">
              <h1 className="float-left display-3 mr-4">500</h1>
              <h4 className="pt-3">{translate('500.title')}</h4>
              <p className="text-muted float-left">{translate('500.description')}</p>
            </span>
            <CInputGroup className="input-prepend">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-magnifying-glass" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <FormattedMessage id="500.input.placeholder">
                {
                  placeholder => <CInput size="16" type="text" placeholder={placeholder} />
                }
              </FormattedMessage>
              <CInputGroupAppend>
                <CButton color="info">{translate('500.search')}</CButton>
              </CInputGroupAppend>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page500
