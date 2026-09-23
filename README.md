# SF Airbnb Listings

A JavaScript and DOM self-assessment project that loads Airbnb listing data from a local JSON file and dynamically displays the first 50 listings.

## Features

- Loads Airbnb listing data using `fetch()` and `async/await`
- Displays the first 50 listings from the JSON file
- Shows:
  - Listing name
  - Description
  - Amenities
  - Host name
  - Host photo
  - Price
  - Listing thumbnail
- Responsive layout using Bootstrap
- Creative feature: sort listings by price
  - Default order
  - Price: Low to High
  - Price: High to Low

## Technologies Used

- HTML
- CSS
- JavaScript
- ES6 Modules
- Bootstrap 5
- Fetch API
- GitHub Pages

## How It Works

The project uses the Fetch API with `async/await` to load Airbnb data from a local JSON file.

The first 50 listings are selected using JavaScript and rendered dynamically into the page using DOM manipulation.

Each listing card displays the required information, including the listing name, description, amenities, host name and photo, price, and thumbnail.

The sorting feature uses a JavaScript event listener to reorder the displayed listings based on price.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/agilan11/airbnb-listings-self-assessment.git
```

Move into the project folder:

```bash
cd airbnb-listings-self-assessment
```

Start a local server:

```bash
python3 -m http.server 8080
```

Open the following URL in your browser:

```text
http://localhost:8080
```

## Deployment

Live Website:

[https://agilan11.github.io/airbnb-listings-self-assessment/](https://agilan11.github.io/airbnb-listings-self-assessment/)

GitHub Repository:

[https://github.com/agilan11/airbnb-listings-self-assessment](https://github.com/agilan11/airbnb-listings-self-assessment)

## AI Usage

AI was used only to help draft and improve this README.

Prompt used:

> Act as an experienced full-stack engineer and help me create a clear and meaningful README for my SF Airbnb Listings JavaScript and DOM self-assessment project. The application uses JavaScript ES6 modules, fetch with async/await, Bootstrap, DOM manipulation, and a local JSON file to display the first 50 Airbnb listings. Each listing shows its name, description, amenities, host name and photo, price, and thumbnail. The project also includes a creative price sorting feature. Include the project purpose, features, technologies used, instructions for running the project locally, deployment information, and license information.

## License

This project is licensed under the MIT License.