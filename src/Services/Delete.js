import {domainPath} from './Config';

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve,reject) => {
        fetch(`${domainPath}/${path}/${data}`, {method: 'delete'})          // alamat URL API yang ingin dihapus datanya
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}
export default DeleteAPI;