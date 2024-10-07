import UserProfile from './components/UserProfile';

function App() {

  const user = {
    name: "kedar",
    email: "kedarmane321@gmail.com",
    avatarUrl: "http://abc.com"
  }
  return (
    <>
       <UserProfile user={user}/>
    </>
  );
}

export default App;
