export const API_ROOT = import.meta.env.VITE_API_ROOT;

export default function myFetch<T>(url: string, data: any = null, method?: string ): Promise<T> {
    const options: RequestInit = {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    };
    console.log("url: " + url);
    console.log("data: " + data);
    console.log("method: " + method);
    return fetch("http://localhost:3003/api/v1/" + url, options).then( x=>{
        if(x.ok){
            console.log("x: " + x);
            return x.json();
        }else{
            return x.json().then(y=> { throw(y) });
        }
     } );
}