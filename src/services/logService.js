//import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn: "https://527e4322674042648b032a8d6d60c177@sentry.io/1869420"
  // });
}

function log(error) {
  //Sentry.captureException(error);
  console.log(error);
}

export default {
  init,
  log
};
