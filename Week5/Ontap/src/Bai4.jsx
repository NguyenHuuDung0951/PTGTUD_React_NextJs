import React, { useEffect, useState, useCallback, useMemo } from 'react'

const Bai4 = () => {
const [data,setData] = useState([])
const [search,setSearch] = useState('')

var url = "https://jsonplaceholder.typicode.com/posts"

useEffect(() =>{
    async function fetchData() {
        try{
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
            setData(data);
            
        }
        catch(err){
            console.log("Error: ",err.message);
            
        }
    }

    fetchData();

},[])


const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
},[])


const filterPost = useMemo( () =>{
    if(!search) return data;
    const kq = search.toLocaleLowerCase().trim();
    return data.filter(item => item.title.toLowerCase().includes(kq) || item.body.toLowerCase().includes(kq) )
},[data, search])

  return (
    <>
    <input type="text" value={search} onChange={handleSearch} placeholder="Search by title or body" />
        {
            filterPost.map((item) =>{
                return <div key={item.id}>
                <h3>{item.body}</h3>
                <h3>{item.title}</h3>
                
                </div>
            })
        }
    
    </>
  )
}

export default Bai4
