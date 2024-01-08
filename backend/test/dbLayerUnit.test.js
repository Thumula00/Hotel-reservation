const {describe, beforeAll, afterAll, it, expect} = require("@jest/globals")
const mongoose = require('mongoose')
const {User} = require("../models/User");
const assert = require('assert');
const {Hotel} = require("../models/Hotel");
const {Book} = require("../models/Book");

describe('Database Layer Uint testing', () => {

    beforeAll(async () => {
        mongoose.connect('mongodb+srv://dv:jt8GbZneQMqsscv8@cluster0.xjkqkk3.mongodb.net/hotel?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            err => {
                if (!err) {
                    console.log("connection success!")
                } else {
                    console.log("connection fail!" + JSON.stringify(err, undefined, 2))
                }
            })
    });

    afterAll(async () => {
        await mongoose.connection.close()
    });


    it('get a user by email', async () => {
        try {
            const result = await User.findOne({email: "nonim@gmail.com"})
            console.log(result)
            expect(result.error).toBeFalsy();
        } catch (e) {
            expect(e).toBeFalsy();
        }
    });

    it('get all hotels', async () => {
        try {
            const result = await Hotel.find()
            console.log(result)
            expect(result.error).toBeFalsy();
        } catch (e) {
            expect(e).toBeFalsy();
        }
    });

    it('get all books', async () => {
        try {
            const result = await Book.find()
            console.log(result)
            expect(result.error).toBeFalsy();
        } catch (e) {
            expect(e).toBeFalsy();
        }
    });
});
