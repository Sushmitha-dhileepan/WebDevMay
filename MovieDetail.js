import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row, ListGroup, Badge } from 'react-bootstrap'

function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState([])
    const [movieTrailer, setMovieTrailer] = useState('')
    //  https://api.themoviedb.org/3/movie/616037?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
    // // https://api.themoviedb.org/3/movie/616037/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
    const { movie_id } = useParams()

    //async func
    useEffect(() => {
        fetch(` https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetail(data)
            })

        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieTrailer(data.results[0].key)
            })

    }, [movie_id])
    return (
        <Container className="bg-dark p-0" fluid={true}>
            <div className="p-5 bg-primary text-white movie-img rounded-0" style={{ 'background': `url(http://image.tmdb.org/t/p/w500${movieDetail.poster_path})` }}>
                <h1 className='text-center movie-title'>{movieDetail.original_title}</h1>
            </div>
            <Row className='p-0 m-0'>
                <Col md={3} className='p-3'>
                    <ListGroup>
                        <ListGroup.Item className='bg-none text-light border-o py-1'>
                            <Badge bg="warning" text="dark" className='w-100 rounded-0 text-start'>IMDB score: <p className='bg-white rounded d-inline px-2'>{Math.floor(movieDetail.vote_average)}</p></Badge>
                        </ListGroup.Item>

                        <ListGroup.Item className='bg-none text-light border-0 py-1'>
                            <Badge bg="warning" className='w-100 rounded-0 text-start' text='dark'>Movie language: <p className='bg-white rounded d-inline px-2'>{movieDetail.original_language !== undefined ?
                                movieDetail.original_language.toUpperCase() : ''}</p></Badge></ListGroup.Item>

                        <ListGroup.Item className='bg-none text-light border-0 py-1'> <Badge bg="warning" className="w-100 rounded-0 text-start" text="dark">Category:</Badge>
                            <ListGroup>
                                {movieDetail.genres !== undefined ? movieDetail.genres.map((cat, index) => (<ListGroup.Item className='rounded-0 py-0' key={cat.id}>{cat.name}</ListGroup.Item>
                                )) :
                                    ''
                                }
                            </ListGroup>
                        </ListGroup.Item>

                        <ListGroup.Item className="bg-none text-light border-0 py-1">
                            <Badge bg="warning" className="w-100 rounded-0 text-start" text="dark">Production: </Badge>
                            <ListGroup>
                                {
                                    movieDetail.production_companies !== undefined ?
                                        movieDetail.production_companies.map((prod) => (
                                            <ListGroup.Item className="rounded-0 py-0" key={prod.id}>
                                                <a href={movieDetail.homepage} className="text-decoration-none text-dark" target="_blank">{prod.name}</a>
                                            </ListGroup.Item>
                                        )) :
                                        ''
                                }
                            </ListGroup>

                        </ListGroup.Item>

                    </ListGroup>


                </Col>
                <Col md={8}>
                    <h1 className='text-light display-6 movie-story p-2'>Overview</h1>
                    <p className='bg-dark text-light'>
                        {movieDetail.overview !== undefined ? movieDetail.overview

                            : 'not available'
                        }
                    </p>
                    <iframe width={560} height={315} src={`http://www.youtube.com/embed/${movieTrailer}`} title="Youtube video player" frameBorder={0} className='youtube-video' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </Col>


            </Row >

        </Container >

    )
}

export default MovieDetail