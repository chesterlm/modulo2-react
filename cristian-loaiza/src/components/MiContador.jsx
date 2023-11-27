import { useState } from 'react';

const MiContador = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    const decrementarContador = () => {
        setContador(contador - 1);
    };

    return (
        <div>
        <h1>Contador: {contador}</h1>
        <button onClick={incrementarContador}>Incrementar</button>
        <button onClick={decrementarContador}>Decrementar</button>
        </div>
    );
};

export default MiContador;