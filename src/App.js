import React, {useEffect, useState} from 'react'


// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

    const [nutri, setNutri] = useState([])

    useEffect(() => {
        function loadApi() {
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
            
            fetch(url)
            .then((resultado) => resultado.json())
            .then((json) => {
                setNutri(json)
            })


        }

        loadApi()
    }, [])



    return(
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>
        </div>

    )
}


export default App