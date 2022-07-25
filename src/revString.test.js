const revString= require('./revString');

test ("Returns a word's reverse", () => {

    expect(revString('Maria')).toMatch('airaM')
});

test ('Reverse spaces', () =>{
    expect(revString("great job!")).toMatch("!boj taerg")
  })
