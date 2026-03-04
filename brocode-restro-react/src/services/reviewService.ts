export const fetchReviews = async () => {
    const response = await fetch("http://localhost:5000/api/reviews");
    return response.json();
};