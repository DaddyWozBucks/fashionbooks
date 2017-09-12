const requester = require('request');
const cors = require('cors')({origin: true});
exports.getLists = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
      const formData = {'api-key': '362f4508e923486dbd28ee49cf4693b9'};
      requester.get({'url':'https://api.nytimes.com/svc/books/v3/lists/names', 'qs': formData}, function callBack (err, resp, body){
          response.status(200).send({data: body})
      })
  })
});
exports.getBooks = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
      const formData = {'api-key': '362f4508e923486dbd28ee49cf4693b9', list: request.body.list};
      requester.get({'url':'https://api.nytimes.com/svc/books/v3/lists.json', 'qs': formData}, function callBack (err, resp, body){
          response.status(200).send({data: body})
      })
  })
});