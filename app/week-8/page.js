'use client'
// Import the useUserAuth hook
import { AuthProvider, useUserAuth } from "./_utils/auth-context";
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
    return (
        <div>
            <p>CPRG-306</p>
            <p>Week 8 APP</p>
            {user ? (
                <div>
                    <p>Hello & Welcome, {user.displayName} ({user.email})</p> 
                    <Link href="app/week-8/shopping-list/page.js">Go to Shopping List</Link>
                    <div>
                    <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            ):
            (
                <button onClick={handleLogin}>Login with GitHub</button>
            )}
        </div>
    );
}

export default Page;
