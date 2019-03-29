'use strict';



module.exports.create = async (event, context) => {
  const output = {
    message: 'done'
  };
  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };

};

module.exports.list = async (event, context) => {
  const output = {
    items: [
      {
        name: 'Pencil',
        price: 12
      },
      {
        name: 'Pen',
        price: 10
      },
      {
        name: 'Book',
        price: 50
      },
      {
        name: 'Bag',
        price: 200
      }
    ]
  };
  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };

};
