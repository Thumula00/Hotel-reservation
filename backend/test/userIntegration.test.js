const request = require('supertest');
const assert = require('assert');
const {describe, it} = require("@jest/globals")

const app = require("../index");

describe('User API', function () {

    it('user login', function (done) {
        request(app)
            .post('/User/login')
            .send({email: "sewmin@gmail.com", password: "sewmin123"})
            .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

    it('get user by id', function (done) {
        request(app)
            .get('/User/63d5ef913860d81598a42da7')
            // .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log(res.body)
                return done();
            });
    });
});

describe('GET /get users', function () {
    it('get all users', function (done) {
        request(app)
            .get('/User')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log(res.body)
                return done();
            });
    });
});
