import React from 'react';
import queryString from 'query-string';

import Form from '../components/Form';

export default ({location, match}) => {
    const query = queryString.parse(location.search);

    return (
        <div>
            {/* <div>welcome {match.params.userId} !</div> */}
            <Form />
        </div>
    )
}