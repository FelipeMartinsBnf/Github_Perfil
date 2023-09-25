import { useState } from "react";
import Perfil from "./componets/Perfil";
import Formulario from "./componets/Form"
import ReposList from "./componets/ReposList";

function App() {
  const [formVisible, setFormVisible] = useState(0)
  return (
    <main>
      <Perfil nomeGit='Felipe Martins' nomeUsuario='FelipeMartinsBnf' />
      <ReposList nomeUsuario={'FelipeMartinsBnf'}/>
      {/* {formVisible && (
        <Formulario/>
      )}
      <button type="button" onClick={() => {
        setFormVisible(!formVisible)
      }}>Toggle form</button> */}

    </main>
   )
}

export default App
