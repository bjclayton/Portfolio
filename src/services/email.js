export const sendEmail = async (formData) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/send-email`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData: formData })
        });

        return response;
    } catch (error) {
        console.error('Error sending message:', error.message);
    }
}
