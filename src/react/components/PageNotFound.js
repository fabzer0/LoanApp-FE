import React from "react";
import { h1pageStyle, pStyle } from './common/pageNotFoundStyles'

const PageNotFound = () => (
    <div>
      <h1 style={h1pageStyle}>Page Not Found</h1>
      <p style={pStyle}>Sorry, but the page you were trying to view does not exist.</p>
    </div>
)

export default PageNotFound;
