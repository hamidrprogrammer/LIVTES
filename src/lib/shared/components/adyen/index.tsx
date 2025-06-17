/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import AdyenCheckout from "@adyen/adyen-web";
import React, { useEffect, useRef } from 'react'
import "@adyen/adyen-web/dist/adyen.css";


interface AdyenDropInProps {
  clientKey?: string | undefined
  session?: string | undefined
  id?: string | undefined
  onCallBack: () => void,
  testMode?: boolean,
}
interface PaymentSession {
  id: string | undefined // Unique identifier for the payment session
  sessionData: string | undefined // The payment session data
}

interface PaymentResult {
  resultCode: string
  [key: string]: any // Allows additional properties
}

interface UIElement<T> {
  [key: string]: any // Add properties as needed
}

interface OnPaymentCompletedData {
  [key: string]: any // The data returned when the payment is completed
}

interface GlobalConfiguration {
  clientKey: string
  session: PaymentSession
  environment: 'test' | 'live'
  onPaymentCompleted: (data: OnPaymentCompletedData, element?: UIElement<any>) => void
  onPaymentFailed: (data: PaymentResult, element?: UIElement<any>) => void
  onError: (error: Error, element?: UIElement<any>) => void
  paymentMethodComponents: []
}

const AdyenDropIn: React.FC<AdyenDropInProps> = ({ clientKey, session, id, onCallBack, testMode }) => {
  const paymentContainer = useRef(null)
   
  useEffect(() => {

    const initializeAdyen = async () => {
     let lan =  localStorage.getItem('lang')

     if(lan==null){
      lan="en"
     }
      if (!session) {
        console.error('Adyen clientKey is required!')
        return
      }
      if (!clientKey) {
        console.error('Adyen clientKey is required!')
        return
      }

      	const klarnaConfiguration = {
  useKlarnaWidget: true // When set to true, the Klarna widget is shown. Set to false to initiate a redirect flow.
};
      const globalConfiguration: any = {
        clientKey,
paymentMethodsConfiguration: { // Specify the widget flow for all Klarna types.
    klarna: klarnaConfiguration,
    klarna_account: klarnaConfiguration,
    klarna_paynow: klarnaConfiguration
  },
        locale:lan +"-"+lan.toLocaleUpperCase(),
        countryCode: lan.toLocaleUpperCase(),
        session: {
          id,
          sessionData: session,
        },
        environment:  testMode? "test":"live", // Change to 'live' for the live environment
        onPaymentCompleted: (result: any, component: any) => {
          // toast({ title: t('PaymentSuccessful'), variant: 'success' })

          setTimeout(() => {
            onCallBack()
          }, 2000)
        },
        onPaymentFailed: (result: any, component: any) => {
          console.info(result, component)
          setTimeout(() => {
            onCallBack()
          }, 4000)
        },
        onError: (error: { name: any; message: any; stack: any }, component: any) => {
          console.error(error.name, error.message, error.stack, component)
          setTimeout(() => {
            onCallBack()
          }, 4000)
        },
      }

      const checkout = await AdyenCheckout(globalConfiguration)

      if (paymentContainer.current) {
        // checkout.re("dropin").mount(paymentContainer.current);
        const dropin = checkout.create('dropin').mount(paymentContainer.current)
      }
    }

    initializeAdyen()
  }, [clientKey])

  return (
    <div className="payment-container">
      <div ref={paymentContainer} className="payment"></div>
    </div>
  )
}

export default AdyenDropIn
