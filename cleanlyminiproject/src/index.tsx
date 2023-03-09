import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "./redux/reduxStore";



import * as Sentry from "@sentry/react";

// If taking advantage of automatic instrumentation (highly recommended)
import { BrowserTracing } from "@sentry/tracing";
// Or, if only manually tracing
import * as _ from "@sentry/tracing"
// Note: You MUST import the package in some way for tracing to work

Sentry.init({
  dsn: "https://13485300d3024aebb3c526c8b21545a7@o4504796902653952.ingest.sentry.io/4504796905275392",

  // This enables automatic instrumentation (highly recommended), but is not
  // necessary for purely manual usage
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});







const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);



root.render(
    <Provider store={reduxStore}>
      <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
