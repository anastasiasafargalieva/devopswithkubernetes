const getStringNow = () => {


  var randomstring = require("randomstring");
  const randomString = randomstring.generate(7);
  const now = new Date;

  //require('log-timestamp')(function() { return 'date="' + new Date().toISOString() + '" string="%s"' });
  console.log(now, randomString)

  setTimeout(getStringNow, 5000)
}

getStringNow()