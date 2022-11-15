import { useState } from "react"

function Counter() {
    // variáveis a gente atualizado o seu ESTADO
        // desestruturação de variáveis -> let count = []
        // const [argumentos, argumentos] = método
    // const [estado atual, callback de atualização]
                // setCount é padrão colocar set+nome do estado atual
    const [count, setCount] = useState(0) // inicializando o meu estado == let count = 0

    function sum() {
        setCount(count + 1) // 0 + 1 == 1 -> setCount(1) -> count = 1
    }

    function sub() {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={ sum }>+</button>
            <p>{ count }</p>
            <button onClick={ sub }>-</button>
        </div>
    )
}

export default Counter