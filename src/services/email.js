export const sendEmail = async (sender, subject, body) => {
    try {
        const response = await fetch('https://portfolio-production-2700.up.railway.app/api/send-message', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ sender: sender, subject: subject, body: body })
        });

        const responseData = await response.json();
        return responseData.message;
    } catch (error) {
        console.error('Error sending message:', error.message);
    }
}