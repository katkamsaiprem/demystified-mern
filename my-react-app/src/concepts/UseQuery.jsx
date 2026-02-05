//custom hook
import { useState, useEffect } from "react";

const useQuery = (fetchURL) => {
    //state data is to show to users
    const [data, setData] = useState(null);//we keep this as null, because we dont know what type of data we get from backend
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPokimon = async () => {
        try {
            const response = await fetch(fetchURL);
            console.log(response);       
            //respone doesnt throw error ,so we need to throw
            if (!response.ok) {
                console.log("dafsdf");

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
    useEffect(() => {// useEffect callback goes to schudle when js sees it first time ,runs callback when compoent is mounted
        console.log("inside useEffect");

        fetchPokimon();

    }, [])//used empty to call useEffect only onces when component is rendered




    return { data, isLoading, error };
}

export default useQuery;