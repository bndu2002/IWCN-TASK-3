const axios = require('axios')
const { response } = require('express')

const postPhoenNumber = async (req, res) => {
    try {

        const axios = require('axios');

        // Function to post the phone number
        const postPhoneNumber = async (phoneNumber) => {
            try {

                const options = {
                    method: 'Post',
                    url: 'https://chimpu.xyz/api/post.php'
                }

                const data = {
                    Post: phoneNumber
                };

                const response = await axios(options, data);

                // Access the headers from the response object
                const headers = response.headers;
                console.log(headers); // Print the received headers

                return res.status(200).send({ status: true, message: 'Success', data: headers })
                // // You can access specific header values using headers['header-name']
                // console.log(headers['header-name']);

            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        // Usage example
        const phoneNumber = '1234567890'; // Replace with the actual phone number
        postPhoneNumber(phoneNumber);


    } catch (error) {
        return res.status(500).send({ status: false, messagae: error.messagae })
    }
}

module.exports = { postPhoenNumber }