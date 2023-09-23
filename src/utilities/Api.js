
const url ='https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'

export const apiFetch =async()=>{
    try{
        const data = await fetch(url) 
        const newData = await data.json()
        console.log(newData)
    }catch(error){
        console.log(error)
    }
    
}