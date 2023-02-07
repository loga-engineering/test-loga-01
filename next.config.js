const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //DEV PARAMS
  } else if (phase === PHASE_PRODUCTION_SERVER) {
    //PROD PARAMS
  }

  return {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    env: {
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID
    }
  }
}
