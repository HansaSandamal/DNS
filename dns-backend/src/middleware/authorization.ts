import { createErrorResponse } from "./errorHandler";

export const PERMISSION_TYPES = {
    ADMINISTRATOR: 'Administrator',
    USER: 'User',
    ANY: 'Any'
  };

  /**
 * @param {any} permittedRoles
 * @returns {Function}
 */
export default function authorization(
    permittedRoles: string[],
  ) {
    return async (req:any, res:any, next:any) => {
      console.log(req.body);
      //let userRole: any;
      if(req.headers.authorization){
        return next();
      }
      //userRole = req.headers.authorization.split(' ')[1]
      
      //if (userRole) {
       
        //if (permittedRoles.includes(PERMISSION_TYPES.ANY) || permittedRoles.includes(userRole)) {
         
          //return next();
        //}
     //}
  
      return res.status(403).send(createErrorResponse('User is not authorized to perform this action'));
    };
  }
  