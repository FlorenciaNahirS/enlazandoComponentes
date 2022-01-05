import React, {Component} from 'react';
import Genre  from './Genre';

export default class GenresInDb extends Component {

    constructor() {
        super(); 
        this.state = {
            genreList : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/genres')
            .then(response => response.json())
            .then(genres => {
                this.setState({
                    genreList : genres.data
                })
            }).catch(errors => console.log(errors))
    }

    handleChangeBg(){
        document.querySelector('#card-body').classList.toggle('bg-secondary')
    }

    render() {
        return (
            <div className="col-lg-12">						
                    <div className="card shadow mb-4" >
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800"  onMouseOver={()=>this.handleChangeBg()}>Genres in Data Base</h6>
                        </div>
                        <div className="card-body" id="card-body"> 
                            <div className="row">
                                {
                                    this.state.genreList.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
