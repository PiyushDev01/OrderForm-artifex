import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FormContextProvider from './OrderformSection/OrderFormContext/FormContextProvider'
import DetailProvider from './OrderformSection/DetailContext/DetailProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <DetailProvider>
    <FormContextProvider>
      <App />
      </FormContextProvider>
    </DetailProvider>
  </React.StrictMode>,
)
