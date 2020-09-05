import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

export default ({location, match}) => {
    const query = queryString.parse(location.search);

    useEffect(() => {

        // axios.get('/')
            // .then((response) => { setData(response) });
      }, []);

    return (
        <Fragment>
            <div> welcome {match.params.userId} ! </div>
        </Fragment>
    )
}