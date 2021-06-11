import React from 'react'
import {
   CCardFooter,
   CCol,
   CProgress,
   CRow,
} from '@coreui/react'

import { FormattedMessage } from 'react-intl';

const DashboardFooter = () => {
   const [items, setItems] = React.useState(
      [
         {
            id: 1,
            itemTitle: 'Visits'
         },

         {
            id: 2,
            itemTitle: 'Unique'
         },

         {
            id: 3,
            itemTitle: 'Pageviews'
         },

         {
            id: 4,
            itemTitle: 'New Users'
         },

         {
            id: 5,
            itemTitle: 'Bounce Rate'
         }
      ]
   );

   return (
      <CCardFooter>
         <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
               <FormattedMessage id="item.input.placeholder">
                  {
                     placeholder => <input
                        maxLength="15"
                        className="itemTitle"
                        placeholder={placeholder}
                        value={items[0].itemTitle}
                        onChange={
                           e => {
                              setItems(
                                 items
                                    .map(i => (i.id - 1 === 0) ? { ...i, itemTitle: e.target.value } : i)
                              )
                           }
                        } />
                  }
               </FormattedMessage>
               <strong>29.703 Users (40%)</strong>
               <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="success"
                  value={40}
               />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
               <FormattedMessage id="item.input.placeholder">
                  {
                     placeholder => <input
                        maxLength="15"
                        className="itemTitle"
                        placeholder={placeholder}
                        value={items[1].itemTitle}
                        onChange={
                           e => {
                              setItems(
                                 items
                                    .map(i => (i.id - 1 === 1) ? { ...i, itemTitle: e.target.value } : i)
                              )
                           }
                        } />
                  }
               </FormattedMessage>
               <strong>24.093 Users (20%)</strong>
               <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="info"
                  value={20}
               />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
               <FormattedMessage id="item.input.placeholder">
                  {
                     placeholder => <input
                        maxLength="15"
                        className="itemTitle"
                        placeholder={placeholder}
                        value={items[2].itemTitle}
                        onChange={
                           e => {
                              setItems(
                                 items
                                    .map(i => (i.id - 1 === 2) ? { ...i, itemTitle: e.target.value } : i)
                              )
                           }
                        } />
                  }
               </FormattedMessage>
               <strong>78.706 Views (60%)</strong>
               <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="warning"
                  value={60}
               />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
               <FormattedMessage id="item.input.placeholder">
                  {
                     placeholder => <input
                        maxLength="15"
                        className="itemTitle"
                        placeholder={placeholder}
                        value={items[3].itemTitle}
                        onChange={
                           e => {
                              setItems(
                                 items
                                    .map(i => (i.id - 1 === 3) ? { ...i, itemTitle: e.target.value } : i)
                              )
                           }
                        } />
                  }
               </FormattedMessage>
               <strong>22.123 Users (80%)</strong>
               <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="danger"
                  value={80}
               />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
               <FormattedMessage id="item.input.placeholder">
                  {
                     placeholder => <input
                        maxLength="15"
                        className="itemTitle"
                        placeholder={placeholder}
                        value={items[4].itemTitle}
                        onChange={
                           e => {
                              setItems(
                                 items
                                    .map(i => (i.id - 1 === 4) ? { ...i, itemTitle: e.target.value } : i)
                              )
                           }
                        } />
                  }
               </FormattedMessage>
               <strong>Average Rate (40.15%)</strong>
               <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  value={40.15}
               />
            </CCol>
         </CRow>
      </CCardFooter>
   )
}

export default DashboardFooter