const greeter = (person: string) => {
    return `Hello, ${person}!`;
  };
  
  function testGreeter() {
    const user = "Grant";
    Logger.log(greeter(user));
  
    const age = 30;
    Logger.log(greeter(age)); // Argument of type '30' is not assignable to parameter of type 'string'.ts(2345)
  }