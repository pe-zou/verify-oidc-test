import { UserManager } from "https://cdn.jsdelivr.net/npm/oidc-client-ts/+esm";
import { oidcConfig } from "./oidc-config.js";

console.log("oidcConfig:", oidcConfig); 

const mgr = new UserManager(oidcConfig);

document.getElementById("login").addEventListener("click", () => {
  console.log("Login button clicked");
  mgr.signinRedirect().catch(e => console.error("Login error", e));
});

document.getElementById("logout").addEventListener("click", () => {
  mgr.signoutRedirect();
});

mgr.getUser().then(user => {
  if (user) {
    document.getElementById("userinfo").textContent = JSON.stringify(user.profile, null, 2);
  }
});
