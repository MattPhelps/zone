"use client";

import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

const AmplitudeInitializer = () => {
  useEffect(() => {
    if (AMPLITUDE_API_KEY) {
      amplitude.init(AMPLITUDE_API_KEY, {
        serverUrl: "https://api.eu.amplitude.com", // EU server zone
        autocapture: {
          elementInteractions: true,
          formInteractions: false,
          fileDownloads: false,
        },
      });
      console.log("Amplitude initialized with EU server zone");
    } else {
      console.error("Missing Amplitude API Key");
    }
  }, []);

  return null;
};

export default AmplitudeInitializer;
