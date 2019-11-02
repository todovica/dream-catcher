const fs = require('fs');
const client = require('_helpers/db');

// users hardcoded for simplicity, store in a db for production applications
//const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    collectEmail,
    confirmEmail
};

async function collectEmail() {
   // return client.db("dream_catcher").collection("stories").find().toArray();
}

async function confirmEmail({ title, date, content, email }) {
   /* const collection = client.db("dream_catcher").collection('stories');
    await collection.findOne({title: title})
        .then(function(value) {
            if (!value) { // if rute is not found, we add it to database
                collection.insertOne({
                    title: title,
                    date: date,
                    content: content,
                    email: email
                });
            } else {
                throw 'error adding article: title exists';
            }
        })
        .catch((err) => console.log("ERROR addArticle: " + err));
        
    return { title, date, content, email };*/

}