const variables = {
    API_KEY: btoa(process.env.GITHUB_TOKEN) ,
    FLAG: btoa(process.env.FLAG_GRAVY_OVERFLOW_L0_FRIES),
};
console.log(btoa(variables))