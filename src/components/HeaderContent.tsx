import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function HeaderContent() {
    return (
        //<header className="App-header">
        //<React.Fragment>
        <>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    헤더 컨텐츠 분리
                </a>
        </>
        //</React.Fragment>
        //</header>
    );
}

export default HeaderContent;
