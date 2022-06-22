const express = require('express');
const bodyParser = require('body-parser');
const circularJSON = require('circular-json');

const router = express.Router({ mergeParams: true });
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
        console.log(req.body);

        const json = circularJSON.stringify({ message: 'Данные получены' });
        res.send(json);

        const body = {
            // fields: {
            // brand: 'Ошибка валидации: Введите корректную марку автомобиля',
            // model: 'Ошибка валидации: Введите корректную модель автомобиля',
            // year: 'Выберите другой год выпуска (отечественный авто на момент погашения должен быть не старше 10 лет)',
            // category: 'Ошибка валидации: Введите корректную категорию',
            // },
            //
            // fields: {
            //     VIN: 'Ошибка валидации: Введите корректный VIN номер',
            //     location:
            //         'Ошибка валидации: К сожалению выбранный город не обслуживается банком, выберите другой из списка',
            //     mileage: 'Ошибка валидации: Введите корректный пробег',
            // },

            // addressError: 'Ошибка валидации: Введите другой адрес',

            // clientIncomeError: 'Ошибка валидации: Укажите корректный доход',
            otpError: 'Ошибка: введите корректный код из СМС',
        };

        // res.status(400);
        // res.send(body);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

module.exports = { sendDataRouter: router };
