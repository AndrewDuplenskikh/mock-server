const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const circularJSON = require('circular-json');

const router = express.Router({ mergeParams: true });
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * Возвращает одно ближайшее соответствие со строкой запроса,
 * соответствие по марке и модели авто. Старая версия API дадаты
 */
router.post('/', async (req, res) => {
    try {
        const query = [{ ...req.body }.query];
        console.log('Request: ' + query);
        if (!req.body.query.length) {
            res.send({ suggestions: [] });
            return;
        }

        const url = 'https://dadata.ru/api/v2/clean/vehicle';
        const token = 'be3d24451c1560145f6d0329e1ce976146d5f3f5';
        const secret = 'c258e3142d5e1e8ce35d0701b51b8b829e60194c';

        const instanceAxios = axios.create({
            baseURL: url,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Token ' + token,
                'X-Secret': secret,
            },
        });

        const data = await instanceAxios
            .post('', query)
            .then((response) => {
                return response.data;
            })
            .catch((e) => {
                console.log(e.message);
            });
        console.log(data);
        // let suggestions = data.map((option) => {
        //     return { data: { name: option.result } };
        // });
        // if (!suggestions[0].data.name) {
        //     suggestions = [];
        // }
        // suggestions = data[0].result ? [{ data: { name: data[0].result } }] : [];
        // console.log('Responce: ' + suggestions);
        // res.send({ suggestions: suggestions });
    } catch (e) {
        res.send({ error: e.message });
    }
});

module.exports = { getAutoBrandAndModelRouter: router };
