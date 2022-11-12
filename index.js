export default {
	fetch(request) {
    let response = {
			"method": request.method,
			"url": request.url,
      "body": request.body,

		}
    if(request.method=="POST"){
      return new Response(JSON.stringify(response, null, 1),{
        headers: {
          "content-type": "text/plain"
        }
      })
    }
    else{
      return new Response("Not a POST request",{
        headers: {
          "content-type": "text/plain"
        }
      })
    }
  }
};