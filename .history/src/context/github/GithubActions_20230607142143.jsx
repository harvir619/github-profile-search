import axios from "axios"

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN


const github = axios.create({
    baseURL: GITHUB_URL,
    headers:{Authorization:`token ${GITHUB_TOKEN}`}
})

//Search Users
export const searchUsers = async (text) => {
    // setLoading()
    
    const params = new URLSearchParams({
        q: text
    })
    
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
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
    
//Get Users Repo
export const getRepos = async (login) => {
    // setLoading()
    const params = new URLSearchParams({
        sort: 'created',
        per_page:10
    })
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
    const data = await response.json()
    // dispatch({ type:'GET_REPOS', payload:data})
    return data
}