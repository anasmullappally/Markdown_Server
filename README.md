# Real-time Markdown Editor with Live Preview - Backend

A real-time Markdown editor that converts Markdown text to HTML and displays the rendered HTML in a live preview pane.

## Tech Stack

Node, Express, nodemon, dotenv, marked , chalk,cors, helmet, winston, winston-daily-rotate-file

## Setup

#### 1. Clone the Repository:

```bash
 https://github.com/anasmullappally/Markdown_Server
```

#### 2. Install Dependencies:

```bash
cd Markdown_Server
npm install
```

#### 3.Configure Environment Variables:

Create a `.env` file in the root directory and set the following variables:

```bash
PORT = 5000
CLIENT = http://localhost:5173
```

Make sure to update the port number on the client side as well if you change it (the default port number is 5000).

#### 3.Run Project

To run the project, use the following command:

```bash
npm start
```

## Routes

#### 2. `POST` api/convert

**Description:**
Convert the markdown into html

**Request:**

- Method: `POST`
- URL: `/api/convert `
- Headers: None
- Body: markdown

**Response:**

- Status Code: `200 OK`
  - Body:
    ```json
    { "message": "converted successfully." }
    ```
- Status Code: `400 Bad Request`
  - Body:
    ```json
    { "message": "markdown text is required" }
    ```
- Status Code: `500 Internal Server Error`
  - Body:
    ```json
    { "message": "Internal Server Error" }
    ```

## License

[MIT](https://choosealicense.com/licenses/mit/)
