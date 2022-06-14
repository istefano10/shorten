## Run Locally

1. Remove the part ".template" of ".env.template" file name, for use environment variables
2. Clone the project
3. Install dependencies
4. Start the server

**POST Example:**

```http
POST http://localhost:3000/api/short
Content-Type: application/json

{
    "origUrl": "https://developer.atlassian.com/server/confluence/pagination-in-the-rest-api/"
}

```

**GET Example:**

```http
GET http://localhost:3000/QUhW7_f1F
```

**GET all URLs Example:**

```http
GET http://localhost:3000/api/short

```
