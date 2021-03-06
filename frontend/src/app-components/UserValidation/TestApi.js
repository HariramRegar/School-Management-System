import React, { useState } from 'react';
import axios from 'axios';

function TestApi() {
    const [inputs, setInputs] = useState({});

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        // console.log({ inputs });
        event.preventDefault();
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios({
          method: 'get',
          url: 'https://jsonplaceholder.typicode.com/posts',
        //   data: {inputs},
          //headers: {'Content-Type': 'multipart/form-data' }
          })
          .then((res) => {
            // console.log(res);
          }).catch((err) => {
            // console.log(err);
          });
      }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='email' value={inputs.email} onChange={handleInputChange} />
            <input type='text' name='password' value={inputs.password} onChange={handleInputChange} />
            <button type='submit'>Login</button>
        </form>
    )
}
export default TestApi;