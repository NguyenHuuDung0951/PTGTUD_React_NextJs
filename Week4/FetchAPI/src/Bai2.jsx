import { useEffect, useState } from "react";

export default function Bai2(){
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    var url ="https://jsonplaceholder.typicode.com/users"

   useEffect(() => {
        async function fetchData() {
            try{
                var res = await fetch(url);
                var data = await res.json();
                console.log(data);
                setData(data);
            }
            catch(err){
                setError(err.message)
                console.log("Error: ", err.message);
            }
            finally{
                setTimeout(() =>{
                    setLoading(false)
                },1000)
            }
        }
        fetchData();
    }, [])

    return(
        <>
        {
            loading ? (<p>loading...</p>) : (error ? (<p>Error Networking ...</p> ) : ( data.map((item) => {
                return <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>
            })))
        }
        </>
    )
}
