import axios from "axios";

export const fetchCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact',{timeout:5000})
        return response.data.fact
    } catch (error) {
        console.error('error fetching cat fact', error.message)
        return "Cats are amazing creatures"
    }
}