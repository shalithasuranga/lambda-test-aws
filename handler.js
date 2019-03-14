'use strict';



module.exports.create = async (event, context) => {
  const output = {
    task: 'create',
    msg: event.input,
    mysql: JSON.stringify(event)
  };
  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };

};

module.exports.list = async (event, context) => {
  const output = {
    task: 'list',
    msg: event.input
  };
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };

};
