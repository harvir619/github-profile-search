const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

//Search Users
export const searchUsers = async (text) => {
    // setLoading()
    
    const params = new URLSearchParams({
        q: text
    })
    
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
        {
            headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    },)
    const {items} = await response.json()
    // dispatch({ type:'GET_USERS', payload:items })
    
    return items
} 