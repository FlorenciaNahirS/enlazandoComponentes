import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDB from './LastMovieInDB';
import Movie from './Movie';
import NotFound from './NotFound';

function ContentRowTop() {
	return (
		<div className="container-fluid">
			<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
			

				<Routes>
					<Route exact path="/" element={<ContentRowMovies />} />
					<Route exact path="/lastMovie" element={<LastMovieInDB />} />
					<Route exact path="/genres" element={<GenresInDb />} />
					<Route exact path="/movies" element={<Movie />} />
					<Route  path="*" element={<NotFound/>} />					
				</Routes>


		</div>
	)

}
export default ContentRowTop;