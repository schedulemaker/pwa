class Configuration {
    getBasePath() {
        const envUrl = process.env.REACT_APP_API_URL
        if (envUrl === undefined) {
            return "/api"
        }
        return envUrl
    }
    getDefaultTimeout() {
        return 10000 //timeout in MS (10 seconds)
    }
    isDebugMode() {
        return true
    }
    isProduction() {
        const prod = process.env.REACT_APP_PRODUCTION
        return prod === "true"
    }
}


const config = new Configuration();

export default config;