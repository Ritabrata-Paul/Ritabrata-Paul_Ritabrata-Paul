# Random Image Display and Share

This web application is built using Next.js, React, TypeScript, and TailWindCSS, allowing users to display random images and share them with rich previews on social media platforms. The application leverages server-side rendering (SSR) capabilities provided by Next.js for improved performance and responsiveness.

## Key Features

- **Display Random Image:** Each time the page is refreshed, a new image is fetched from a free API or library (e.g., [picsum.photos](https://picsum.photos/)) and displayed in the center of the page. This provides users with a unique and visually appealing experience.

- **Responsive UI:** The application is designed with responsive UI principles, ensuring that it works seamlessly across different devices and screen sizes. The image display and sharing functionality adapt to provide an optimal user experience.

- **Share Link with Rich Preview:** The application allows users to share the currently displayed image on popular social media platforms such as Facebook, Twitter, and WhatsApp. When the share button is clicked, users are provided with options to share the page with a rich preview that includes the image.

- **Server-Side Rendering (SSR) with Next.js:** Next.js is used to render the initial content on the server, which improves performance by reducing the time to first render. This ensures that users can quickly view and share the random image without waiting for client-side rendering.

- **Copy Link to Clipboard:** Users can easily copy the link of the currently displayed image to the clipboard by clicking on the image. This feature provides a convenient way to share the image outside of social media platforms.

- **Get Random Pic on Clicking Refresh Page Button:** Users can manually trigger the fetching of a new random image by clicking the refresh page button. This allows them to change the displayed image without refreshing the entire page.

- **Code Formatting with Prettier:** The project includes Prettier, a code formatting tool, to ensure consistent and clean code formatting across the application.

- **Linting with ESLint:** ESLint is set up to enforce code quality and consistency, providing helpful suggestions and warnings to developers during the development process.

- **Open Graph Meta Tags:** The application includes Open Graph meta tags to optimize the image preview when sharing the page on social media platforms. This ensures that the shared link displays the current image as a preview, enhancing the visual appeal and user experience.

## Prerequisites

- Node.js version 14.x or higher

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/Ritabrata-Paul/Ritabrata-Paul.git
```

2. Navigate to the project directory:

```shell
cd Ritabrata-Paul
```

3. Install the required packages:

```shell
npm install
```

4. Start the development server:

```shell
npm run dev
```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000).

## Dependencies

The project utilizes the following dependencies:

- React: A JavaScript library for building user interfaces.
- Next.js: A React framework for server-side rendering (SSR) and static site generation (SSG).
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- TailWindCSS: A utility-first CSS framework for rapidly building custom user interfaces.
- React Router: A library for handling navigation within a React application.
- [Random Image API/Library]: The specific API or library used to fetch random images (e.g., [picsum.photos](https://picsum.photos/)).
- react-share: A React component library for social media sharing.

---

## Contributing

Feel free to modify and enhance this application to suit your needs. If you encounter any issues or have suggestions for improvements, please submit them to the repository's issue tracker. Happy coding!
