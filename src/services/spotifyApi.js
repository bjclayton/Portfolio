export const getNowPlaying = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/generate-token`);

        const responseData = await response.json();

        return responseData;
    } catch (error) {
        console.error('Error fetching currently playing song:', error.message);
    }
}
