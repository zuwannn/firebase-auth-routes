import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from './firebase';

function Home() {
    const { user } = useAuthState();

    return(
        <div>
            <h1>Wellcome {user?.email}</h1>
            <button onClick={() => signOut(getAuth())}>Sign Out</button>
        </div>
    )
}
export default Home