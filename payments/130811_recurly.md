# Recurly

## Wizard begins
1. sign up
2. make a subscription plan name
3. add details of subscription plan
  * charge
  * frequency
  * setup fee
  * trial period
4. Go to dashboard

Hosted payment pages allow you to start accepting subscriptions immediately. Now that you've defined a subscription plan, you can preview the payment page. Or, continue on to explore all the functionality of your new Recurly account.
Your hosted payment pages can be further customized or you can create your own payment page using our API.

##Implementation
1. requires a merchant account


## try this:
```bash
$ curl -H 'Accept: application/xml' \
     -H 'Content-Type: application/xml; charset=utf-8' \
     -u [API Key]: https://youpayedus.recurly.com/v2/accounts
<?xml version="1.0" encoding="UTF-8"?>
<accounts type="array">
</accounts>
```