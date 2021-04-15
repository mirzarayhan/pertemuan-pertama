import React, {Component} from 'react';
import './BlogSpot.css';
import Post from "../../Container/BlogSpot/Post";
import API from "../../Services/index"

class BlogPost extends Component{

    state = {
        listArtikel: [],                            //var array untuk menyimpan data APi
        insertArtikel: {                            //var yang digunakan menampung semenara data yang ingin dimasukkan 
            userId: 1,                              //merupakan kolom yang ada didalam listArtikel.json
            id: 1,
            title: "",
            body: ""
        }
    }
    
    ambilDataDariServerAPI = () =>{
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {                //fungsi untuk meng-handle tombol hapus
        API.deleteNewsBlog(data)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel : formInsertArtikel
        })
    }
    
    handleTombolSimpan = () => {                // fungsi untuk meng-handle tombol simpan
        API.postNewsBlog(this.state.insertArtikel)
            .then( (response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className= "form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label" >Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className ="col-sm-10">
                            <textarea className="form-control" name="body" id="cody" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} 
                        hapusArtikel={this.handleHapusArtikel}/> 
                    })
                }
            </div>
        )
    }
}
export default BlogPost;