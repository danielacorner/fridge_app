import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Hyeran Lee Art">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />

      <script
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        id="snipcart"
        data-api-key="MDQ0MTE2MWMtYzgzMi00NTdkLTgzMGUtYTBlMjM0MzgwNDUzNjM2NzM0MTA1OTUwMTkxMDQ4"
      />

      <link
        href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
        type="text/css"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
