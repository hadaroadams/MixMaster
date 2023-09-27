

export const apiFetch =async(search)=>{
    const url ='https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s='
    const newUrl= search==''?url:`${url}${search}`
    console.log(newUrl)
    try{
        const data = await fetch(newUrl) 
        const {drinks}= await data.json()
        console.log(drinks)
        return drinks
    }catch(error){
        console.log(error)
    }
    
}