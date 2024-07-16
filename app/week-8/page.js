'use client'
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

// Use the useUserAuth hook to get the user object and the login and logout functions
function Page() {
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
    if (!user) {
        return <button onClick={handleLogin}>Login with GitHub</button>;
    } else {
        return (
            <div>
                <p>Welcome, {user.displayName} ({user.email})</p>
                <Link href="./week-8/shopping-list">Go to Shopping List</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
    );
}
}

export default Page;
