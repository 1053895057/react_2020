import ajax from './ajax'

const http={
    get(url,params){
        const config = {
            method: 'get',
            url:url
        }
        if(params) config.params = params
        return ajax(config)
    },
    post(url,params){
        const config = {
            method: 'post',
            url:url
        }
        if(params) config.data = params
        return ajax(config)
    }
}

export default http