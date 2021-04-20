import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ii9x2FNlObOxyApDJYNcUhRMmeX7GdMqf1Ztme8ZQs6bR9MujwxMT23hWsOtdxQ6KTjJ36ryb2dzzviKNRMJipV005zkyzP0b';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        namne='Crown Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pya Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
