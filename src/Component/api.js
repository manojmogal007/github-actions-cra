import axios from 'axios'

export const githubdata=(lan)=>{
    let res= axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${lan}&limit=10`)
     return res
}