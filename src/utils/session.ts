import Cookies from 'js-cookie'

const saveConfirmMail = (email: string) => {
  Cookies.set('em', email, { expires: 7 })
}

const getConfirmEmail = () => {
  return {
    email: Cookies.get('em'),
  }
}

const savesession = (authToken: string, refreshToken: string) => {
  Cookies.set('authToken', authToken, { expires: 7 })
  Cookies.set('refreshToken', refreshToken, { expires: 7 })
}

const getsession = () => {
  return {
    authToken: Cookies.get('authToken'),
    refreshToken: Cookies.get('refreshToken'),
  }
}

const destroysession = () => {
  Cookies.remove('authToken')
  Cookies.remove('refreshToken')
}

const session = {
  saveem: saveConfirmMail,
  getem: getConfirmEmail,
  save: savesession,
  get: getsession,
  destroy: destroysession,
}

export default session
