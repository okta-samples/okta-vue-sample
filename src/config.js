const { CLIENT_ID, ISSUER } = process.env

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: window.location.origin + '/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  }
}
