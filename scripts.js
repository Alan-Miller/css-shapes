// 'use strict';


function stricto() {
  'use strict';
  x = 3.14;
  try {
    return x;
  }
  catch(err) {
    console.log('why not?');
  }
}

stricto();