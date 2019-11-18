module.exports = {
    // for validation arrayyy!
        flattenErrorsToArr(errorsObj) {
            const errorMsgs = []
            for (const key in errorsObj.errors) {
    
                const errorObj = errorsObj[key];
                errorMsgs.push(errorsObj.message);
            }
            return errorMsgs
        },
    }
    
    