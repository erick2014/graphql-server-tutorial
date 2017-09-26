const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const schema = require("./schema/schema");
const port = 4000;

app.use('/graphql', expressGraphQL({
	graphiql: true,
	schema
}))

app.listen(port, () => {
	console.log("Listening on port" + port)
})