export const getNowPlaying = async () => {
    try {
        const response = await fetch('https://portfolioapi-2a97.onrender.com/generate-token');

        const responseData = await response.json();

        return responseData;
    } catch (error) {
        console.error('Error fetching currently playing song:', error.message);
    }
}