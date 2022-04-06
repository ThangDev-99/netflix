const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4a9f235f974e28bf955320321eb7e576',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig