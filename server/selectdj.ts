var pgp = require('pg-promise')();
var db = pgp('postgres://localhost:5432/wmfo');
function getdj(firstName) {
    return db.task(function (t) {
        return t.oneOrNone('SELECT tuftsid FROM dj WHERE firstName = $1', firstName, function (u) { return u && u.tuftsid; })
            .then(function (tuftsid) {
            return tuftsid // || HOW TO THROW A RUNTIME ERROR;
        });
    });
}
//|| t.one('INSERT INTO Users(name) VALUES($1) RETURNING id', name, u => u.id)
console.log('beforefunctioncall');
var toprint = getdj('mac');
//console.log(toprint);
toprint.then(results => console.log(results));
console.log('AFTER');
