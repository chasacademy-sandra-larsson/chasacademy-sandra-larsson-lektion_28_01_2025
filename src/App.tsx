
import './App.css'
import Message from "./Message"
import ProfileCard from './ProfileCard'

function App() {

  return (
     <>
       <h1>Min första React App</h1>
       <Message name="Sandra"/>
       <main>
        { /* Props som skickas till komponenten*/}
            <ProfileCard  name="John Doe" img="picsum" skills="React, Typescript"  city ="Stockholm" born={1991}  />
            <ProfileCard  name="Jane Doe" img="picsum" skills="Vue, Typescript"  city ="Åbo" born={1990}  />
            <ProfileCard  name="Kalle" img="picsum" skills="Svelte, Typescript"  city ="Götebord" born={1989}  />

       </main>

    </>
  )
}

export default App


