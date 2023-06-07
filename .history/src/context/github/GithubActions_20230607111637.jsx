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

//Get single users
export const getUser = async (login) => {
        // setLoading()
        const response = await fetch(`${GITHUB_URL}/users/${login}`,
            {
                headers: {
                    Authorization:`token ${GITHUB_TOKEN}`
                }
            },)
        
        if (response.status === 404) {
            window.location = '/notfound'
        } else {            
            const data = await response.json()
            // dispatch({ type:'GET_USER', payload:data})
            return data
        }
    }