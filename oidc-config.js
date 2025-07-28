export const oidcConfig = {
  client_id: "2820b48c-bb13-4244-94d6-424f1390ef88",
  redirect_uri: "https://pe-zou.github.io/verify-oidc-sample/callback.html",
  post_logout_redirect_uri: "https://pe-zou.github.io/verify-oidc-sample/index.html",
  response_type: "code",
  scope: "openid profile email",
  metadata: {
    issuer: "https://ciam-ndi.verify.ibm.com/oauth2",
    authorization_endpoint: "https://ciam-ndi.verify.ibm.com/oauth2/authorize",
    token_endpoint: "https://ciam-ndi.verify.ibm.com/oauth2/token",
    userinfo_endpoint: "https://ciam-ndi.verify.ibm.com/oauth2/userinfo",
    end_session_endpoint: "https://ciam-ndi.verify.ibm.com/oauth2/logout",
    jwks_uri: "https://ciam-ndi.verify.ibm.com/oauth2/keys"
  }
};
