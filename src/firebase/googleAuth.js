import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseSetup";
import { redirectAuth } from "../utility/redirectAuth.js";
import { warning } from "../utility/alerts.js";

// Initialize Auth and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Optional: set custom parameters (popup hint)
provider.setCustomParameters({
    prompt: "select_account",
});

export function googleAuth() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            //test user attributes
            console.log("✅ Signed in as:", user.displayName);
            console.log("🔑 Token:", token);
            console.log("📧 Email:", user.email);
            console.log("🖼️ Photo:", user.photoURL);

            sessionStorage.setItem("user", JSON.stringify(user));

            //change to generate view
            redirectAuth()
        })
        .catch((error) => {
            console.error("❌ Error:", error.code, error.message);
            warning(`Invalid Authentication: Error ${error.code}`)
        });
}
