import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');    //penambahan sort and order berdasarkan parameter
const postNewsBlog = (dataYangDikirim) => PostAPI('posts', dataYangDikirim);
const deleteNewsBlog = (dataYangDihapus) => DeleteAPI('posts', dataYangDihapus);

const API = {  // inisialisasi dari function yang disediakan global API
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API