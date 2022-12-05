
import './App.css';
import Profile from './Profile/Profile';


function App() {
const fullName='Ben Yahia Zaher'
const bio ='Financial analysist and a Full stack web developer'
const profession='Web Developer'
const alertme=()=>{
  alert('Welcome')
}


return(
<Profile
fullName={fullName}
bio={bio}
profession={profession}
alert={alertme}

/>

);
}


export default App;
