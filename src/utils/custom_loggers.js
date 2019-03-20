
/*
*********************************
View array, object in table format
*********************************
*/
//console.table = msg => console.table(msg);

/*
*********************************
View stack trace
*********************************
*/
//console.trace = obj => console.trace(obj);

/*
*********************************
Log todo
*********************************
*/
//console.todo = msg =>  console.log(‘ % c % s % s % s‘, ‘color: yellow; background - color: black;’, ‘–‘, msg, ‘–‘);

/*
*********************************
Log important
*********************************
*/
//console.important = msg => console.log(‘ % c % s % s % s’, ‘color: brown; font - weight: bold; text - decoration: underline;’, ‘–‘, msg, ‘–‘);


export default {
  table: obj => console.table(obj),
  trace: obj => console.trace(obj),
  todo: obj => console.log(`% c % s % s % s`, `color: yellow; background - color: black;`, `–`, obj, `–`),
  important : msg => console.log(` % c % s % s % s`, `color: brown; font - weight: bold; text - decoration: underline;`, `–`, msg, `–`)
};
