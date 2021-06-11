import React, {useContext, useState} from 'react'
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import translate from './../../../i18n/translate';
import { FormattedMessage } from 'react-intl';
import {useHttp} from "../../hooks/http.hook";

const Register = () => {

  const [form, setForm] = useState({
    username: '', password: ''
  })

  const [checkPassword, setCheckPassword]=useState("")

  const {loading, error, request, clearError} = useHttp()
  const history = useHistory();

  const registerHandler = async (event) => {
    try {
      if(checkPassword === form.password){
        const data = await request('http://84.252.139.162:8080/signup', 'POST', {...form})
      }else{
        console.log('Пароли не совпадают')
      }

      history.push(`/login`)

    } catch (e) {

    }
  }

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const checkHandler = event => {
    setCheckPassword(event.target.value)
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1 className="formTitle">{translate('register.title')}</h1>
                  <p className="text-muted">{translate('register.create_your_account')}</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <FormattedMessage id="register.name.placeholder">
                      {
                        placeholder => {
                          return <CInput  id="username"
                                          name="username" type="text" placeholder={placeholder} onChange={changeHandler} autoComplete="username" />
                        }
                      }
                    </FormattedMessage>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <FormattedMessage id="register.password.placeholder">
                      {
                        placeholder => {
                          return <CInput  id="password"
                                          name="password" type="password" placeholder={placeholder} onChange={changeHandler} autoComplete="new-password"    />
                        }
                      }
                    </FormattedMessage>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <FormattedMessage id="register.repeat_password.placeholder">
                      {
                        placeholder => {
                          return <CInput onChange={checkHandler} type="password" placeholder={placeholder} autoComplete="new-password" />
                        }
                      }
                    </FormattedMessage>
                  </CInputGroup>
                  <CButton onClick={registerHandler} color="success" block>{translate('register.create_account')}</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
