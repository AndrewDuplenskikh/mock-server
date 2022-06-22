const express = require('express');
const axios = require('axios');
// const bodyParser = require('body-parser');
// const circularJSON = require('circular-json');

const router = express.Router({ mergeParams: true });
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
        // const query = circularJSON.stringify({ ...req.body });
        // console.log('Request: ' + query);
        // if (!req.body.t) {
        //     res.send({ suggestions: [] });
        //     return;
        // }

        const query = {
            rboID: 121230146159,
            timeStamp: '2022-08-14 23:30',
            md5: 'dae628703bc02f32ba1bc978581183f9',
        };

        // const query = circularJSON.stringify(body);

        const url = 'https://test-mobile.atb.su/atb-gateway/mobile/session/v1/iSimpleLogin';

        const instanceAxios = axios.create({
            baseURL: url,
            headers: {
                Accept: '*',
                'Content-Type': 'application/json',
            },
        });

        const data = await instanceAxios
            .post('', { ...req.body })
            .then((response) => {
                return response;
            })
            .catch((e) => {
                console.log(e.message);
            });

        console.log('Response: ' + data);
        res.send(data);
    } catch (e) {
        res.send({ error: e.message });
    }
});

module.exports = { getCardListRouter: router };
