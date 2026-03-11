import { useEffect, useState } from "react";

export default function Bai1(){
    const [data,setData] = useState([])
    var url ="https://jsonplaceholder.typicode.com/users"

    useEffect( () =>{
        var fetchData = fetch(url);
        var res = fetchData.then((response) => {
            return response.json()
        }).then((data)=>{
                setData(data);
            console.log(data);
            
        });
        
    },[])
    
    return(
        <>
        {
            data.map((item) => {
                return <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>
            })
        }
        </>
    )
}