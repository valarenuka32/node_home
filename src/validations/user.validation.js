const joi = require("joi");

// create user

const createUser = {
    body: joi.object().keys({
        first_name: joi.string().required().trim(),
        last_name: joi.string().required().trim(),
        email: joi.string().required().trim(),
        password: joi.string().required().trim(),
    }),
};

const getUserList = {
    query: joi.object().keys({
        search: joi.string().trim().allow(""),
        sortBy: joi.string().trim().allow(""),
        limit: joi.number().integer().allow(""),
        page: joi.number().integer().allow(""),
    }),
};

module.exports = {
    createUser,
    getUserList
};