const { expect } = require('chai');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => done());
})

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        let text = 'Some text for testing';

        request(app) // using supertest
            .post('/todos')
            .send({ text }) // supertest automatically transfer it in JSON
            .expect(200)
            .expect((res) => {
                expect(res.body.text).to.equal(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                Todo.find().then((todos) => { // here we are checking in MongoDB with mongoose
                    expect(todos.length).to.equal(1);
                    expect(todos[0].text).to.equal(text);
                    done();
                }).catch((e) => done(e));
            })

    })

    it('should not create a todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).to.equal(0);
                    done();
                }).catch((e) => done(e));
            })
    })
});