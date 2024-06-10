import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../hookPersonal/useAxiosSecure';
import UseCartData from '../hookPersonal/UseCartData';
import UseAuth from '../hookPersonal/UseAuth';


const CheckoutForm = () => {
    const [displayError, setDisplayError] = useState("");
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { totalPrice } = UseCartData();
    const { user } = UseAuth();



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axiosSecure.post("/create-payment-intent", totalPrice)
            .then(res => {
                // console.log(res.data.client_secret)
                setClientSecret(res.data.client_secret)
            })
    }, []);









    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setDisplayError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setDisplayError("")
        }

        // confirm payemtn 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email || 'anoymonus',
                    name: user.displayName
                }
            }
        })


        if (confirmError) {
            console.log("confirm error")
        } else {
            console.log('success', paymentIntent)
            if (paymentIntent.status == 'succeeded') {
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)
            }
        }



    };




    return (
        <div className='container mx-auto'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-red-600'>{displayError}</p>
            {
                transactionId && <p className='text-green-600'> Your Payment Successful and transaction Id is : {transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;