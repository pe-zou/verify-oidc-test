export const oidcConfig = {
  metadataUrl: "https://ciam-ndi.verify.ibm.com/oauth2/.well-known/openid-configuration",
  client_id: "2820b48c-bb13-4244-94d6-424f1390ef88",
  redirect_uri: "https://pe-zou.github.io/verify-oidc-test/callback.html",
  post_logout_redirect_uri: "https://pe-zou.github.io/verify-oidc-test/",
  response_type: "code",
  scope: "openid profile email"
};
