import { useState, useEffect } from "react";

function Formulario() {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('')


    useEffect(() =>{
        console.log("Componente Iniciou!")
        return () => {
            console.log("o componente finalizou")
        }
    }, [])

    useEffect(() =>{
        console.log("O estado.nome Mudou!")
    }, [nome])

    useEffect(() => {
        console.log("Matéria A mudou para: "+ materiaA)
    }, [materiaA])

    function alteraNome(e) {
        // console.log(e.target.value)
        setNome(estadoAnterior => {
            
            return e.target.value;
        })
    }

    const rederResultado = () => {
        const media = (materiaA + materiaB + materiaC)/3
        
        if(media >= 70) {
            return(
                <p>Olá {nome}, Você foi aprovado!</p>
            )
        }else{
            return (
                <p>Olá {nome}, Você foi repovado!</p>
            )
        }
    }

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>)
                )}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {rederResultado()}
        </form>
    )
}

export default Formulario;