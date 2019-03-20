module.exports.rawFalse = (context) => {
    if (!context.params.sequelize) context.params.sequelize = {};
    Object.assign(context.params.sequelize, { raw: false });
    return context;
}

module.exports.rawTrue = (context) => {
    if (!context.params.sequelize) context.params.sequelize = {};
    Object.assign(context.params.sequelize, { raw: true });
    return context;
}
