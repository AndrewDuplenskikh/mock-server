const express = require('express');
const config = require('./config');
const cors = require('cors');

const { loanPurposesRouter } = require('./routes/loanPurposes');
const { sendDataRouter } = require('./routes/sendData');
const { getAutoBrandRouter } = require('./routes/getAutoBrand');
const { getAutoBrandAndModelRouter } = require('./routes/getAutoBrandAndModel');
const { getLoanConditionsRouter } = require('./routes/getLoanConditions');
const { getLocationsRouter } = require('./routes/getLocations');
const { getPersonalDataRouter } = require('./routes/getPersonalData');
const { getAddressSuggestionsRouter } = require('./routes/getAddressSuggestions');
const { getCalculatorParamsRouter } = require('./routes/getCalculatorParams');
const { getCardListRouter } = require('./routes/toRemove');

const app = express();

app.use(cors());

app.use('/loan-purposes', loanPurposesRouter);
app.use('/send-data', sendDataRouter);
app.use('/get-auto-brand', getAutoBrandRouter);
app.use('/get-auto-brand-and-model', getAutoBrandAndModelRouter);
app.use('/get-loan-conditions', getLoanConditionsRouter);
app.use('/get-locations', getLocationsRouter);
app.use('/get-personal-data', getPersonalDataRouter);
app.use('/get-address-suggestions', getAddressSuggestionsRouter);
app.use('/get-calculator-params', getCalculatorParamsRouter);
app.use('/v1/iSimpleLogin', getCardListRouter);

app.get('/', (req, res) => {
    res.send('Mock-server is running');
});

app.listen(config.PORT, () => {
    console.log(`mock-server listening on ${config.PORT}...`);
});
