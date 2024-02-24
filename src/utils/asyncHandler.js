const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err))
    }
}


export {asyncHandler}






// const asyncHansler = () => {}
// const ayncHandler = (func) => () => {}
// const ayncHAndler = (func) => async () => {}

// const ayncHandler = (fn) => aync (req, res, next)
// => {
//        try{
//          await fn(req, res, next)
//        } catch (error) {
//           res.status(err.code || 500).json({
//              success: false,
//              message: err.message      
//           })
//        }       
//} 