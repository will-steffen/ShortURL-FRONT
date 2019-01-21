let basePath = '/api';

export const ApiRoute = {
    url: {
        default:    basePath + '/url',                  // POST,
        count:      basePath + '/url/count',            // GET(code),
        last:       basePath + '/url/last',             // GET(userId),
        stats:      basePath + '/url/stats',            // GET(code),
        title:      basePath + '/url/metadata-title',   // GET(code),
        
    },
    user: {
        default:    basePath + '/user',                 // GET
        valid:      basePath + '/user/valid',           // GET(id)
    }
};
