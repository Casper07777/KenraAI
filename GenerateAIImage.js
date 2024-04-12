// Import necessary modules
import express from 'express';
import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import { Configuration, OpenAIApi } from 'openai';

// Configure dotenv to load environment variables from .env file
dotenv.config();

// Create an instance of express app
const app = express();

// Configure the app to parse JSON request bodies
app.use(express.json());

// Create a configuration object for the OpenAI API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of the OpenAIApi using the configuration object
const openai = new OpenAIApi(configuration);

// Define the route handler for generating an image
export const generateImage = async (req, res, next) => {
    try {
        // Extract the prompt from the request body
        const { prompt } = req.body;

        // Call the OpenAI API to create an image
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        // Extract the generated image data from the API response
        const generatedImage = response.data.data[0].b64json;

        // Send the generated image as a response
        return res.status(200).json({ photo: generatedImage });
    } catch (error) {
        // If an error occurs, pass it to the error handling middleware
        next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error?.message
            )
        );
    }
};

// Define the route for generating an image
// This should be done outside of the generateImage function
app.post('/api/generateImage', generateImage);

// Start the express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
