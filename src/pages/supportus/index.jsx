import styles from './supportus.module.scss'
import { PayPalButtons } from '@paypal/react-paypal-js'

//ARMm5mkbDX8IM8R3jBRWDfmRkWQ-VIAua5benPdFkckKqCdVnooDqffSICrf2jQ49ufxT5uz1pEgS9iY//
//<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
export default function Support(){
    return(
        <>
            <div className={styles.support}>
                <h1>Support Us</h1>
                
                <div className={styles.paybtn}>
                    <PayPalButtons
                        createOrder={(data,actions)=>{
                        return actions.order.create({
                            purchase_units:[{
                                amount:{
                                    value:'0.1'
                                }
                            }]
                        })   
                        }}
                        onApprove={(data,actions)=>{
                            return actions.order.capture().then(function(details){
                            console.log("approved purchase" + details.payer.name.given_name)
                            })
                        }}
                    />
                </div>
            </div>
        </>
    )
}