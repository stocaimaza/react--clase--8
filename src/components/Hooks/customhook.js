//useContador: creamos nuestro propio hook para contar productos. 

import { useState, useEffect } from "react";

export const useContador = (valorInicial, valorMaximo) => {
    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        if(contador < valorMaximo) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > valorInicial) {
            setContador(contador - 1);
        }
    }

    return {contador, incrementar, decrementar}
}

//Creamos un useFetch: creamos nuestro propio Hook para consumir APIs 

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect( ()=> {
        fetch(url)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.log(error))
    }, [url])

    return data;
}