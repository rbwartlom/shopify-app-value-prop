/*
  Uses EmailJS to send emails, e.g. from the contact form.
*/

import axios from 'axios';

const SERVICE_ID = "service_oig1sig"
const TEMPLATE_ID = "template_xk0x49a"
const USER_ID = "KrTrxBMEUCvuRgitJ"

export const sendEmail = async ({email, name, message}) => {
  const emailjsHeaders = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: USER_ID,
    template_params: {
      reply_to: email,
      from_name: name,
      message,
    },
  };

  const status = {
    content: null,
    isError: false,
  };
  try {
    await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      emailjsHeaders,
    );
    status.content = 'Message sent!';
  } catch (error) {
    status.content = error.response ? error.response.data : error.message;
    status.isError = true;
  }

  return status;
};
