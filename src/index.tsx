import React from 'react';
import ReactDOM from 'react-dom/client';
// import './styles/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// const root = document.getElementById('root');

// ReactDOM.createRoot(root).render(
//     <HashRouter>
//         <div>hey</div>
//     </HashRouter>
// );

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <HashRouter>
        <div>hey</div>
    </HashRouter>,
);
