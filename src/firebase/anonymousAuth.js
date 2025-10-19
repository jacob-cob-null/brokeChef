import { getAuth, signInAnonymously, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseSetup";
import { warning } from "../utility/alerts";
import { redirectAuth } from "../utility/redirectAuth";

// Initialize Auth and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function anonymousAuth() {
    signInAnonymously(auth)
        .then(() => {
            //save temp credentials
            const user = auth.currentUser;
            console.log("Signed in anonymously with UID:", user.uid);
            localStorage.setItem("user", JSON.stringify({ uid: user.uid, anon: true }));

            //change to generate view
            redirectAuth()
        })
        .catch((error) => {
            console.error("❌ Anonymous sign-in failed:", error.code, error.message);
            warning(`Invalid Authentication: Error ${error.code}`)
        });
}