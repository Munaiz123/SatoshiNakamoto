# SatoshiNakamoto_FrontEnd (The Interface)

## Introduction 

Before cloning the repository to your machine, consider checking out the already deployed user interface at [munaizahmed.com](https://www.munaizahmed.com/).

#### Built With (Dev Dependancies)
- [React](https://react.dev/learn) with [Next.js](https://nextjs.org/docs) was used as the frontend framework for the UI.
- [Vercel](https://nextjs.org/docs/deployment) Vercel allowed me to spin up a UI quickly and pair it up with a serverless function. Backend details can be found [here](https://github.com/Munaiz123/SatoshiNakamoto_Backend).
- [Material UI](https://mui.com/material-ui/) was used as the styling and component library to organize NFTs in the UI.
- [Axios](https://www.npmjs.com/package/axios) was used to call the exposed api to the backend in `app/src/service/utils/service.js`.

## Getting Started Locally

If you prefer run the UI locally or want to deep dive into the code, feel free to clone the repo and run command below from inside the project folder:
```bash 
npm install
```
Start the dev server by via:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
You'll find the root/entry point for the UI at `app/src/layout.js`. 

## NFT Collections

The following NFT Collections can be found in the UI:
- Ordinal Maxi Biz (OMB)
- Quantum Cats
- Ordinal Geese

#### NFT Collection Data Retrieval (Magic Eden Ordinals API)
Although Magic Eden did have a free endpoint that I could hit, it was rate-limited and would always give me a ```429``` status code and ```Too Many Requests``` error. 

After requesting an API key with limited validity(one week), I called the ```/tokens?collectionSymbol=t{collectionSymbol}``` endpoint in the backend and saved the data in a postgreSQL database. Hence, the data in the UI not "live" but also comes with the timestamp of when the data collected from the Magic Eden.





