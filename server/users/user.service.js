const fs = require('fs');
const client = require('_helpers/db');
const sendEmail = require('../email/email.send')
const msgs = require('../email/email.msgs')
const templates = require('../email/email.templates')

// users hardcoded for simplicity, store in a db for production applications
//const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    getStories,
    addArticle
};

async function getStories() {
    return client.db("dream_catcher").collection("stories").find().toArray();
}

async function addArticle({ title, date, content, email }) {
    const collection = client.db("dream_catcher").collection('stories');
    await collection.findOne({title: title})
        .then(function(value) {
            if (!value) { // if entry is not found, we add it to database
                collection.insertOne({
                    title: title,
                    date: date,
                    content: content,
                    email: email,
                    confirmed: false
                }).then(res  => { console.log(res.ops ); return sendEmail(email, templates.confirm(res.ops[0]._id)) });

                setTimeout(()=> {
                    console.log("Erase?");
                    collection.findOne({title: title, confirmed: false})
                            .then(function(value) {
                                if (value) {
                                    collection.deleteOne({
                                        title: title,
                                        date: date,
                                        content: content,
                                        email: email
                                    });
                
                                } else {
                                    throw 'could not delete non-confirmed data entry';
                                }
                            })
                            .catch((err) => console.log("ERROR addArticle: " + err));
                }, 30000); // ako posle 5 min nije updejtovano confirmed polje, obrisi entry u bazi
            } else {
                throw 'error adding article: title exists';
            }
        })
        .catch((err) => console.log("ERROR addArticle: " + err));
        
    return { title, date, content, email };

}