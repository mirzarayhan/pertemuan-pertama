import {domainPath} from './Config';

const GetAPI = (path) => {                              // path untuk menunjuk alamat API mana yag direquest
    const promise = new Promise((resolve, reject) =>{
        fetch(`${domainPath}/${path}`)                  // alamat domain+path untuk akses full alamat API yang direquest
            .then(response => response.json())          // response yang dijadikan json
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}
export default GetAPI;