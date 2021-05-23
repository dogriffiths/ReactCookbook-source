const callNetwork = (payload) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(payload)
        }, 5000);
    })
};

const get = async (endPoint) => {
    if (/^\/people\//.test(endPoint)) {
        const id = endPoint.split('/')[2];
        return callNetwork({
            id,
            firstName: 'Vera',
            lastName: 'Duckworth'
        });
    }
}

export {get};
