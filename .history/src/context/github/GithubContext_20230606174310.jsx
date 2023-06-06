import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos:[],
        loading:false
    }
    
    const [state,dispatch] = useReducer(githubReducer,initialState)
    

    
    //Search Users
    const searchUsers = async (text) => {
        setLoading()
        
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
        dispatch({ type:'GET_USERS', payload:items })
    } 
    
    //Get single users
    const getUser = async (login) => {
        setLoading()
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
            dispatch({ type:'GET_USER', payload:data})
        }
    }
    
    //Get Users Repo
    const getRepo = async (login) => {
        
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })
        const { item } = await response.json()
        dispatch({ type:'GET_REPOS', payload:item})
    }
    
    const clearUsers = () => dispatch({type:'CLEAR_USERS'})
    
    const setLoading = () => dispatch({type:'SET_LOADING'})
    
    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getRepo
        }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;
