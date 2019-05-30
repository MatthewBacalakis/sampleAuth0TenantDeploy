function (user, context, callback) {
    console.log(configuration.secret_number);
    callback(null, user, context);
}