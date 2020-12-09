import Axios from 'axios'
import { useState, useEffect } from 'react'
import _ from 'lodash'
import links from '../../data/Links'

const GITHUB_REPO_URL = links.extensionsListEndpoint

const useRepo = () => {
    const [repos, setRepos] = useState([])
    const getRepos = async () => {

        let res = await Axios({
            method: 'GET',
            url: GITHUB_REPO_URL
        })

        let {data} = res

        let own_repo = _.filter(data, o=>!o.fork)

        let P = Promise.all(own_repo.map(async (el) => {
            
            let d = {
                created: el.created_at,
                name: el.name,
                language: el.language,
                issueCount: el.open_issues,
                stars: el.stargazers_count,
                description: el.description,
                issueUrl: el.html_url + '/issues',
                id:el.id,
            }

            return d
        }))

        let temp_repo = await P

        setRepos(temp_repo)
        
    }

    useEffect(() => {
        getRepos()
    }, [])


    return repos
}

export { useRepo }