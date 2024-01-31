# CV builder, an app that helps you build your CV and export it into a professional template

Some of the key functionality can be defined as follows:

- Next.js app router for building the UI
- Tailwind for styling
- Supabase for authentication, and the database
- TypeScript

I've utilised server components in this project, partly as a learning experience. Where possible, I combined this with server actions to complete mutations on the server rather than the client.

Generally, the best use case I've personally found for server components is fetching the data on the server, and passing this into client components. It enabled me to utilise suspense and fallback components as well.

Going forwards, I think I'd generally prefer to use the pages router when writing code in Next.js. 