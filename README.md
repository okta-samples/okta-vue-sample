# Okta Vue + Okta Hosted Login Example

This example shows you how to use the [Okta Vue Library][] to log in a user to a Vue application.  The login is achieved through the [PKCE Flow][], where the user is redirected to the Okta-Hosted login page.  After the user authenticates they are redirected back to the application with an ID Token and Access Token.

This example is built with create Vue app and Vite.

See [Vite Configuration Reference](https://vite.dev/config/).

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).


This code sample demonstrates:
* Configuring Okta
* Sign-in and sign-out
* Protecting routes
* Displaying user profile information from the ID Token
* Adding a component that adds the Access Token to HTTP calls

## Prerequisites

Before you begin, you’ll need an Okta Integrator Free Plan account. To get one, sign up for an [Integrator account](https://developer.okta.com/login). Once you have an account, sign in to your [Integrator account](https://developer.okta.com/login). Next, in the Admin Console:

1. Go to **Applications > Applications**
2. Click **Create App Integration**
3. Select **OIDC - OpenID Connect** as the sign-in method
4. Select **Single-Page Application** as the application type, then click **Next**
5. Enter an app integration name (e.g. "My Vue SPA")
6. In the **Grant type** section, ensure both **Authorization Code** and **Refresh Token** are selected
7. Configure the redirect URIs:
- **Sign-in redirect URIs:** `http://localhost:8080/login/callback`
- **Sign-out redirect URIs:** `http://localhost:8080`
8. In the **Controlled access** section, select the appropriate access level
9. Click **Save**

## Configure Okta resources

**Verify Authorization Server**

When using a custom authorization server, you need to set up authorization policies. Complete these additional steps:

1. In the Admin Console, go to **Security > API > Authorization Servers**
2. Select your custom authorization server (`default`)
3. On the **Access Policies** tab, ensure you have at least one policy:
    - If no policies exist, click **Add New Access Policy**
    - Give it a name like “Default Policy”
    - Set **Assign to** to “All clients”
    - Click **Create Policy**
4. For your policy, ensure you have at least one rule:
    - Click **Add Rule** if no rules exist
    - Give it a name like “Default Rule”
    - Set **Grant type** is to “Authorization Code”
    - Set **User** is to “Any user assigned the app”
    - Set **Scopes requested** to “Any scopes”
    - Click **Create Rule**

For more details, see the [Custom Authorization Server documentation](https://developer.okta.com/docs/concepts/auth-servers/#custom-authorization-server).

## Get the Code

```bash
git clone https://github.com/okta-samples/okta-vue-sample.git
cd okta-vue-sample
```

Update your `.okta.env` file with the values from your application's configuration:

```text
ISSUER=https://integrator-1337.okta.com
CLIENT_ID=0oab8eb55Kb9jdMIr5d6
```

### Where are my new app's credentials?

Creating an OIDC Single-Page App manually in the Admin Console configures your Okta Org with the application settings. You may also need to configure trusted origins for `http://localhost:8080` in **Security > API > Trusted Origins**.

After creating the app, you can find the configuration details on the app’s **General** tab:
- **Client ID**: Found in the **Client Credentials** section
- **Issuer**: Found in the **Issuer URI** field for the authorization server that appears by selecting **Security > API** from the navigation pane.


**Verify Authorization Server**

This repo calls a custom resource server to demonstrate making a protected resource request using an access token. Ensure that your default custom authorization server has an access policy. Add an access policy if it's not there. See [Create access polices](https://help.okta.com/okta_help.htm?type=oie&id=ext-create-access-policies).

## Run the Example

To run this application, install its dependencies:

```
npm ci
```

With variables set, start your app:

```
npm run dev
```

Navigate to http://localhost:5173 in your browser.

If you see a home page that prompts you to login, then things are working!  Clicking the **Log in** button will redirect you to the Okta hosted sign-in page.

You can sign in with the same account that you created when signing up for your Developer Org, or you can use a known username and password from your Okta Directory.

> **Note:** If you are currently using your Developer Console, you already have a Single Sign-On (SSO) session for your Org.  You will be automatically logged into your application as the same user that is using the Developer Console.  You may want to use an incognito tab to test the flow from a blank slate.

## Integrating The Resource Server

If you were able to successfully login in the previous section you can continue with the resource server example. Please download and run one of these sample applications in another terminal:

* [Node/Express Resource Server Example](https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server)
* [Java/Spring MVC Resource Server Example](https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server)
* [ASP.NET Core Web API Resource Server Example](https://github.com/okta/samples-aspnetcore/tree/master/samples-aspnetcore-2x/resource-server)

Once you have the resource server running (it will run on port 8000) you can visit the `/messages` page within the Vue application to see the authentication flow. The Vue application will use its stored access token to authenticate itself with the resource server, you will see this as the `Authorization: Bearer <access_token>` header on the request if you inspect the network traffic in your browser.

## Helpful resources

* [Learn about Authentication, OAuth 2.0, and OpenID Connect][]
* [Get started with Vue][]

## Help

Please visit our [Okta Developer Forums][].

[Okta CLI]: https://cli.okta.com
[PKCE Flow]: https://developer.okta.com/docs/guides/implement-auth-code-pkce
[Okta Vue Library]: https://github.com/okta/okta-vue
[Learn about Authentication, OAuth 2.0, and OpenID Connect]: https://developer.okta.com/docs/concepts/
[Get started with Vue]: https://vuejs.org/guide/introduction.html
[Okta Developer Forums]: https://devforum.okta.com
