# Okta Vue + Okta Hosted Login Example

This example shows you how to use the [Okta Vue Library][] to log in a user to a Vue application.  The login is achieved through the [PKCE Flow][], where the user is redirected to the Okta-Hosted login page.  After the user authenticates they are redirected back to the application with an ID Token and Access Token.

This example is built with [Vue CLI][].

## Running This Example

To run this application, you first need to clone this repo and then enter into its directory:

```bash
git clone https://github.com/okta-samples/okta-vue-sample.git
cd okta-vue-sample
```

Then, install dependencies:

```bash
npm install
```

Install the [Okta CLI][], and run:

```bash
okta start
```

This will create an OIDC app on Okta and replace the placeholders in `.okta.env` with your app's settings.

Now, start your Vue app:

```
npm start
```

Navigate to http://localhost:8080 in your browser.

If you see a home page that prompts you to login, then things are working! Click the **Log in** button to go to the Okta hosted sign-in page.

You can log in with the same account that you created when signing up for your developer org, or you can use a known username and password from your Okta Directory.

> **Note:** If you are currently using your Developer Console, you already have a Single Sign-On (SSO) session for your Org. You will be automatically logged into your application as the same user that is using the Developer Console. You may want to use an incognito tab to test the flow from a blank slate.

## Integrating The Resource Server

If you were able to successfully login in the previous section you can continue with the resource server example. Please download and run one of these sample applications in another terminal:

* [Node/Express Resource Server Example](https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server)
* [Java/Spring MVC Resource Server Example](https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server)
* [ASP.NET Core Web API Resource Server Example](https://github.com/okta/samples-aspnetcore/tree/master/samples-aspnetcore-2x/resource-server)

Once you have the resource server running (it will run on port 8000) you can visit the `/messages` page within the Vue application to see the authentication flow.  The Vue application will use its stored access token to authenticate itself with the resource server, you will see this as the `Authorization: Bearer <access_token>` header on the request if you inspect the network traffic in your browser.

[Okta CLI]: https://cli.okta.com
[Vue CLI]: https://github.com/vuejs/vue-cli
[PKCE Flow]: https://developer.okta.com/docs/guides/implement-auth-code-pkce
[Okta Vue Library]: https://github.com/okta/okta-vue
