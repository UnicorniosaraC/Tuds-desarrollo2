export function asyncHandler(controller, method) {
  return (req, res, next) => {
    Promise.resolve((new controller)[method](req, res))
      .catch(next);
  };
}

 
 
 


