import React, { Component } from 'react'
import MovieList from './MovieList';

export default class Movie extends Component { 

	constructor() {
        super(); 
        this.state = {
            movieList : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/movies')
            .then(response => response.json())
            .then(movies => {
				this.setState({
                    movieList : movies.data
                })
            }).catch(errors => console.log(errors))
    }

	render() {
		return (
			<div className="container-fluid">
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" >
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</tfoot>
								<tbody>
									
									{
										this.state.movieList.map((movie, i) => {
											return <MovieList {...movie} key={i+movie.title}/>
										})
									}

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
