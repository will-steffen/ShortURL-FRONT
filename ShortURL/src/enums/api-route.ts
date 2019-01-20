let basePath = '/api';

export const ApiRoute = {
    url: {
        default: basePath + '/url', // POST,
        count: basePath + '/url/count', // GET(code),
        last: basePath + '/url/last', // GET(userId),
    },
    user: {
        default: basePath + '/user', // GET
        valid: basePath + '/user/valid', // GET(id)
    }
};
