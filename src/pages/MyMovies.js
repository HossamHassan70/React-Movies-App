import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/actions/ToggleFav';
import axiosInstance from '../store/actions/axiosInter';
import { fetchMoviesError, fetchMoviesSuccess } from '../store/actions/FetchMovies';
import { useLanguage } from '../context/LanguageContext';

function MyMovies() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    const [Search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const { language } = useLanguage();
    const favoritesArr = useSelector((state) => state.favorites.favorites);
    const apiKey = 'c0a540d14454051cf74ee4debd0b604e';

    const fetchMovies = (url) => {
        dispatch(fetchMoviesError(null));
        axiosInstance.get(url)
            .then(res => {
                dispatch(fetchMoviesSuccess(res.data.results));
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                dispatch(fetchMoviesError(err.message));
            });
    };

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/popular?language=${language}&api_key=${apiKey}&page=${page}`;
        fetchMovies(url);
    }, [language, page]);

    useEffect(() => {
        const url = Search
            ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${Search}&page=${page}`
            : `https://api.themoviedb.org/3/movie/popular?language=${language}&api_key=${apiKey}&page=${page}`;
        fetchMovies(url);
    }, [language, Search, page]);

    const handleSearch = () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${Search}&page=1`;
        fetchMovies(url);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <h1 className='my-3 text-center moviseTitle'>My Movies</h1>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={12} sm={8} md={6} lg={4} className="mb-3 d-flex align-items-center">
                        <Form.Control
                            type="text"
                            placeholder="Search for movies..."
                            value={Search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="mx-3 custom-input-dark"
                        />
                        <Button variant="outline-primary" onClick={handleSearch}>
                            <b>Search</b>
                        </Button>
                    </Col>
                </Row>
                <Row className='justify-content-center p-3'>
                    {movies.map((movie) => (
                        <Col key={movie.id} xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card className='movie-card' style={{ marginBottom: '20px', position: 'relative' }}>
                                <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                                    <Card.Img
                                        variant="top"
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `${process.env.PUBLIC_URL}/movie-poster-notfound.jpg`}
                                        alt={movie.title}
                                    />
                                </Link>
                                <div className="favorites-icon">
                                    <i className={`fa-heart fa-${favoritesArr.some((favMovie) => favMovie.id === movie.id) ? 'solid' : 'regular'}`}
                                        style={{ cursor: 'pointer', position: 'absolute', top: '15px', right: '15px', fontSize: '2rem', color: 'red' }}
                                        onClick={() =>
                                            favoritesArr.some((favMovie) => favMovie.id === movie.id)
                                                ? dispatch(removeFromFavorites(movie.id))
                                                : dispatch(addToFavorites({ id: movie.id, poster_path: movie.poster_path, original_title: movie.original_title }))
                                        }
                                    ></i>
                                </div>
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className='text-center mb-3'>
                    <Button
                        variant="btn btn-primary"
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        className="mx-2 d-inline"
                    >
                        Previous
                    </Button>
                    <h6 className="mx-2 d-inline text-light"><b>{page}</b></h6>
                    <Button
                        variant="btn btn-primary"
                        onClick={() => handlePageChange(page + 1)}
                        disabled={movies.length === 0}
                        className="mx-2 d-inline"
                    >
                        Next
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default MyMovies;