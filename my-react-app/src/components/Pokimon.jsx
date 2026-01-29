//things that frontend developer should remainder to render data
import { useEffect, useState } from "react";

const PokemonList = () => {

    //state data is to show to users
    const [data, setData] = useState(null);//we keep this as null, because we dont know what type of data we get from backend
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPokimon = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            console.log(response);

            if (!response.ok) {
                console.log("dafsdf ");

                throw new Error("Requesting data is failed- wrong api endpoint");

            }
            const data = await response.json();
            setData(data);
        }
        catch (error) {
            console.log(error)
            setError(error.message)

        }
        finally {
            setIsLoading(false);//we should stop loading ,when we get data from backend ,data can be fullfilled or failed
        }

    }
    //we need to fetch the data only onces when component is monted first time
    useEffect(() => {
        console.log("inside useEffect");

        fetchPokimon();

    }, [])//used empty to call useEffect only onces when component is rendered

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
        </>
    )
}
export default PokemonList;