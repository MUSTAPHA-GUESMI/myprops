import Profile from "./profil/Profile";
function App() {
  const bio= "kick boxing"
  const fullName= "Mustapha Guesmi"
  const profession= "developpeur"
  const handleName=()=>{
    alert("hello from Mustapha")

  }
  return (
    <div className="App">
<Profile bio={bio} fullName={fullName} profession={profession} handleName={handleName}/>
    </div>
  );
}

export default App;
