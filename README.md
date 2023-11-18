Groupoomania P7

TO RUN: "NPM RUN DEV" for front and backend



This is the backend for the Mythomania project
To start scripts: npm run dev 
Technologies used:
Node.js, Express, JWT, Multer
MySQL hosted on PlanetScale
Prisma for ORM
How to use
git clone this repo
npm install
Rename the .env.development file into .env
Populate it with your personal environment variables
This repo was tested with an online PlanetScale MySQL database
How to use Prisma to interact with the DB
The db schema is inside the schema.prisma

DB - If you want to change it, you have to run npx prisma db push

.env contents for testing
SECRET = secretpassword
PORT = 3002

DATABASE_URL='mysql://kv1838iiv2ph4rq3pjiw:pscale_pw_Tr476mE0uj9p0rKyWJlE6ygjsgjtQYZNyMaU9moC5ff@aws.connect.psdb.cloud/groupomania?sslaccept=strict'

database link: https://app.planetscale.com/neil-es
