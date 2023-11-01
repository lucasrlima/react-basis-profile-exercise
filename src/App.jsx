import "./styles/globals.css"
import Profile from "./components/Profile"
import lucAvatar from "./assets/profile.jpg"
import johnAvatar from "./assets/lennon_avatar.jpg"


export default

function App() {
  
  return (
    <div>
      < Profile
        avatar={lucAvatar} 
        name= "Lucas Lima"
        bio= "Full stack dev @MyEggs"
        email= "lucas@lucasrlima.com"
        phone= "+55 11 99187-7870"
        githubUrl= "http://www.github.com/lucasrlima"
        linkedinUrl= "http://www.linkedin.com/in/lucasrochalima"
        instagramUrl="http://www.instagram.com/_lucasrlima"
      />

      < Profile 
        avatar={johnAvatar}
        name= "John Lennon"
        bio= "Greatest Rock Star"
        email= "john@lennon.com"
        phone= "+351 9666-5666"
        githubUrl= "http://www.uol.com.br"
        linkedinUrl= "http://www.linkedin.com/"
        instagramUrl="http://www.instagram.com/"
      />

    </div>
  );
}


