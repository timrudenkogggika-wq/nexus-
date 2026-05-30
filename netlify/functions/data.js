const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwWBNawopRvfkfhB2dyBb70aFhLE3AhHhBwA7cK4bUSIpUwWtlRAaGmAPiuA7S3WQC7vw/exec';

exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const url = SCRIPT_URL + '?' + new URLSearchParams(params).toString();
  
  try {
    const response = await fetch(url);
    const text = await response.text();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: text
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
