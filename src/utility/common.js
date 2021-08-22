module.exports = {
    isValidDate: (dateValue) => {
        if (!dateValue)
            return false;

        if (isNaN(Date.parse(dateValue)))
            return false
        return true;
    },

    getResponse: (data, code, msg) => {
        let response = {
            "code": code | 0,
            "msg": code == 0 ? 'success' : msg,
            "records": data
        };
        return response;
    }
}