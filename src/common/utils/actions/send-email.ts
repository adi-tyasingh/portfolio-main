"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/common/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const response = await fetch("https://nl061vklz1.execute-api.eu-west-1.amazonaws.com/mailing-function", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderEmail,
        message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${errorText}`);
    }

    const data = await response.json();

    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
