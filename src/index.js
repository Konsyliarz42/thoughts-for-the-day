import ReactDOM from 'react-dom/client';
import ThoughtForTheDay from "./ThoughtForTheDay";

import "./css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    < h1 >Thoughts for the day</ h1 >
    <ThoughtForTheDay />
    </>
);
