import {domainPath} from './Config';

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`, {
            method: 'post',                             // method post untuk input data
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)                 //mengirim ke body request untuk data yang akan ditambahkan
        })
            .then((result) => {
                resolve(result);                        // jika sukses maka mengirimkan hasil/result
            }, (err) => {
                reject(err);                            // jika tidak maka akan mengirimkan error
            })
    })
    return promise;
}
export default PostAPI;