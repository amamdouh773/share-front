import axios from "axios"

const callAPI = (endpoint:string) => {
    axios(`https://share-agency.herokuapp.com/api/rest/${endpoint}`,
            {
                headers:{
                    "content-type":"application/json",
                    "x-hasura-admin-secret":"Ahmed2771995"
                }
            }
        )
}

export default callAPI