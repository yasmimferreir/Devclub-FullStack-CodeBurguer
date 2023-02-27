import  Jwt  from "jsonwebtoken";


export default (response, request, next) => {
  const authToken = request.rawHeaders.authorization

  console.log(authToken);
};
