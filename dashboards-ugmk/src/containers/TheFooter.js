import React from 'react'
import { CFooter } from '@coreui/react'

import translate from './../i18n/translate';

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2021 React App</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">{translate('dashboard')}</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
