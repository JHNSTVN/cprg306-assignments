// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

// Use the useUserAuth hook to get the user object and the login and logout functions
function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
// Sign in to Firebase with GitHub authentication
    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in", error);
        }
    };
 
// Sign out of Firebase
    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out", error);
        }
    };
 
// Display some of the user's information
    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={handleLogout}>Logout</button>
                    <Link href="/shopping-list">Go to Shopping List</Link>
                </div>
            ) : (
                <button onClick={handleLogin}>Login with GitHub</button>
            )}
        </div>
    );
}

export default LandingPage;
