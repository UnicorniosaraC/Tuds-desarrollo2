const urlBase = 'http://localhost:4001/api';

export class Api {
static defaultHeaders ={
    'Content-Type': 'application/json'
};

static setMessageForAutoCheck =null

    static async fetch(service, options) {
        options = { headers:{}, ...options};
        options.headers={ ...Api.defaultHeaders, ...options.headers};
        

        if(options.body && typeof options.body != 'string'){
            options.body = JSON.stringify(options.body);
        }
    
        const res=  await fetch(`${urlBase}/${service}`, options);
        
        if (options.autoCheck === false){
            return res;
        }

        if (res.ok){
            return res;
        }

        let message = 'Hay un error';

        try{
            const data = await res.json();
            message = data.message || data.error;
        } catch(e){
            message = 'error desconocido';
        }
        

        if(Api.setMessageForAutoCheck){
            Api.setMessageForAutoCheck (message);
        }

        throw new Error (message);
    }
    
    static get(service, options) {
        return Api.fetch(service, {...options, method: 'GET'});
    }
    
    static post(service, options) {
        return Api.fetch(service, {...options, method: 'POST'});
    }
} 