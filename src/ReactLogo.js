import React from "react";
import logo from "./logo.svg";

function ReactLogo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="small">
          Den mörka avdelningen med loggan här hör till 'ReactLogo.js'. Och att
          allt innehåll hamnar i mitten justeras via style (css). Just för
          'ReactLogo.js' används 'App.css' och för texten 'index.css'.
        </p>
        <p className="small">
          Den vita avdelningen med ContactList:en låter jag vara utan style. Så
          att man fixar funktionaliteten först.
        </p>
      </header>
    </div>
  );
}

export default ReactLogo;
