import React, { Fragment } from 'react';
import queryString from 'query-string';

export default ({location, match}) => {
    const query = queryString.parse(location.search);

    return (
        <Fragment>
            <div>welcome {match.params.userId} !</div>
            <div>{query}</div>
        </Fragment>
    )
}