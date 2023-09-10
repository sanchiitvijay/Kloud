# Kloud - Weather Information App

Kloud is a simple weather information application that allows users to retrieve real-time weather data for a specific city. Users can enter the name of a city, and Kloud will provide them with the current temperature, a picture representing the weather conditions, "feels like" temperature, humidity, and wind speed for that city.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Obtaining an OpenWeather API Key](#obtaining-an-openweather-api-key)
- [Configuring the Application with Your OpenWeather API Key](#configuring-the-application-with-your-openweather-api-key)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **City Weather:** Enter the name of a city to get detailed weather information.
- **Real-time Data:** Kloud fetches real-time weather data from a reliable source.
- **Weather Picture:** A visual representation of the current weather conditions.
- **Feels Like:** Get information on how the weather feels in addition to the actual temperature.
- **Humidity:** Find out the humidity level in the selected city.
- **Wind Speed:** Get the current wind speed in the selected city.

![siteEx1](https://github.com/sanchiitvijay/kloud/assets/71404343/b84bd431-8467-425b-99fb-ef9c9408c06a)

<br>

![siteEx2](https://github.com/sanchiitvijay/kloud/assets/71404343/bb305850-a1c0-4770-b05f-46dbf087e52f)

## Installation

To run Kloud on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/kloud-weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd kloud-weather-app
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

## Obtaining an OpenWeather API Key

To use Kloud and fetch weather data from the OpenWeather API, you need to obtain an API key. Follow these steps to get your API key:

1. Visit the [OpenWeather website](https://openweathermap.org/).

2. Sign up for a free account or log in if you already have one.

3. After logging in, go to the [API Keys](https://home.openweathermap.org/api_keys) section in your account dashboard.

4. Click on the "Generate API Key" button to create a new API key.

5. Give your API key a name and choose the subscription plan that suits your needs.

6. Once your API key is generated, copy it to your clipboard.

## Configuring the Application with Your OpenWeather API Key

To configure Kloud with your OpenWeather API key, follow these steps:

1. Open the `.env` file in the project's root directory if you haven't already.

2. Add your OpenWeather API key to the `.env` file like this:

   ```env
   OPENWEATHER_API_KEY=your_openweather_api_key
   ```

   Replace `your_openweather_api_key` with the API key you obtained from the OpenWeather website.

3. Save the `.env` file.

Now, your Kloud application is set up to use your OpenWeather API key to fetch weather data.

## Usage

1. Start the application:

   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000`.

2. Open your web browser and go to `http://localhost:3000`.

3. Enter the name of the city for which you want to fetch weather information.

4. Click the "Get Weather" button.

5. Kloud will display the current weather data for the specified city.

## Technologies Used

Kloud is built using the following technologies:

- **EJS:** For rendering dynamic HTML templates.
- **CSS:** For styling the user interface.
- **JavaScript:** For handling user interactions and making API requests.
- **Node.js:** For server-side scripting.
- **Express.js:** As the web application framework.

## Contributing

Contributions are welcome! If you have any ideas for improvements or bug fixes, please open an issue or submit a pull request. For major changes, please discuss them in an issue first.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to fit your project's specific details and requirements. Users of your project will now have clear instructions on how to obtain and set up their own OpenWeather API key for use with your weather information app.
