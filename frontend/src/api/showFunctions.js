export const getNextShows = async (genre,skip)=>{
    const response = await fetch(`http://localhost:8000/api/v1/shows?genre=${genre}&&skip=${skip}`);
    const data = await response.json();
    return data;
}
export const addShowToList = async (show)=>{
    const response = await fetch(`http://localhost:8080/shows`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(show)
    });
    const data = await response.json();
    return data;
}