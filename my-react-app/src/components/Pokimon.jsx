//things that frontend developer should remainder to render data
import { useEffect, useState } from "react";
import useQuery from "../concepts/UseQuery";

const PokemonList = () => {
    const { data, isLoading, error } = useQuery("https://pokeapi.co/api/v2/pokemon/pikachu");



    if (isLoading) {
        console.log("loading ui");

        return (
            <h1>Loading......</h1>
        )
    }
    if (error) {
        return (
            <h1>error: {error}</h1>
        )
    }

    if (!data || !Object.keys(data).length) {
        console.log(data);
        return (
            <h1>Empty Data!</h1>
        )
    }



    return (
        <>
            <h1>Pokimons</h1>
            <p>{JSON.stringify(data)}</p>
            {//Why we need to convert the object to a string:
                // The Problem:
                // In React/JSX, you cannot directly render JavaScript objects. If you try to render an object like <p>{data}</p>, React will throw an error:

                // The Solution:
                // JSON.stringify(data) converts the object into a string representation, which React can safely render as text.

            }
        </>
    )
}
export default PokemonList;