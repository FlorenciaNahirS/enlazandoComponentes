import { handle } from 'express/lib/application';
import React, { Component } from 'react'
import SmallCard from './SmallCard';


export default class ContentRowMovies extends Component {

    constructor() {
        super();
        this.state = {
            movies: {
                color: "primary",
                titulo: "Movies in Data Base",
                valor: "",
                icono: "fas fa-film",
            },
            awards: {
                color: "success",
                titulo: "Total awards",
                valor: "",
                icono: "fas fa-award",
            },
            actors: {
                color: "warning",
                titulo: "Actors quantity",
                valor: "",
                icono: "fas fa-user",
            }
        }
    }

    apiCall(url, handler) {
        fetch(url)
            .then(response => response.json())
            .then(total => {
                handler(total)
            }).catch(errors => console.log(errors))
    }

    allMovies = info => {
        this.setState({
            movies: {
                ...this.state.movies,
                valor: info.data
            }

        })
    }

    allAwards = info => {
        this.setState({
            awards: {
                ...this.state.awards,
                valor: info.data
            }
        })
    }

    allActors = info => {
        this.setState({
            actors: {
                ...this.state.actors,
                valor: info.data
            }

        })
    }

    componentDidMount() {
        this.apiCall('http://localhost:3001/api/movies/total', this.allMovies)

        this.apiCall('http://localhost:3001/api/movies/totalAwards', this.allAwards)

        this.apiCall('http://localhost:3001/api/actors/total', this.allActors)
    }

    render() {
        return (
            <div className="row">
                <SmallCard  {...this.state.movies} />
                <SmallCard  {...this.state.awards} />
                <SmallCard  {...this.state.actors} />
            </div>
        )
    }
}
