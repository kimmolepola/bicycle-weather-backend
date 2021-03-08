module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // Add a message to the Storage queue,
    // which is the name passed to the function.
    context.bindings.msg = (req.query.name || req.body.name);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}