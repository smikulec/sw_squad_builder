## About

This project is a Star Wars squad builder application. The application provides users to login into their accounts, search for characters, and to create and have an overview of created squads of Star Wars characters for various purposes, such as gaming or role-playing.

## Getting Started

1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Create a .env file where you will put the following environmental variables needed to be able to login/signup and access the data

```bash
NEXTAUTH_SECRET= random string you generate or write on your own

NEXTAUTH_URL= http://localhost:3000/

NEXT_PUBLIC_GRAPHQL_ENDPOINT= corresponding graphql endpoint url
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app in action.
