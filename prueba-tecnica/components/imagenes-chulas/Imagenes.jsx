import React from 'react';
const images = [
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BZTdmNjY5ODYtYTJlMi00ZWY0LTg0YWQtZjY5NWM2ZGYzOTA2XkEyXkFqcGdeQXVyMTA2ODkwNzM5._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTQ0NTk5Mzk2OV5BMl5BanBnXkFtZTcwMDE3NTE4MQ@@._V1_FMjpg_UX1000_.jpg'
]

import './imagenes.css'

const Imagenes = () => {
    return (
        <section>
            {
                images.map((img) => (
                    <img src={img} />
                ))
            }
        </section>
    );
}

export default Imagenes;
