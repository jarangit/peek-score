/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

export const fetchGptData = async (msg: string) => {
  if (!msg.trim()) return;


  try {
    // const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    //   model: "gpt-4o-mini", // ใช้โมเดลที่ถูกต้อง (แก้ไขจาก "gpt-4o-mini")
    //   temperature: 1, // แก้ไขการพิมพ์ผิด
    //   top_p: 1,
    //   max_tokens: 2048,
    //   messages: [
    //     {
    //       "role": "developer",
    //       "content": "You are a helpful assistant."
    //     },
    //     {
    //       "role": "user",
    //       "content": msg
    //     }
    //   ]
    // }, {
    //   headers: {
    //     'Authorization': `Bearer ${key}`,
    //     'Content-Type': 'application/json'
    //   }
    // });
    const mockResponse = {
      "id": "chatcmpl-AsrF4BS4RPzP3VG9mZISlHOrmw13p",
      "object": "chat.completion",
      "created": 1737637738,
      "model": "gpt-4o-mini-2024-07-18",
      "choices": [
        {
          "index": 0,
          "message": {
            "role": "assistant",
            "content": "Certainly! Below is a basic HTML template for a landing page that promotes the iPhone 12 Pro Max. This example includes elements like a header, image, features, and a call to action.\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>iPhone 12 Pro Max - Experience the Future</title>\n    <link rel=\"stylesheet\" href=\"styles.css\"> <!-- Link to your CSS file -->\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f5f5f5;\n            color: #333;\n        }\n        .container {\n            max-width: 1200px;\n            margin: 0 auto;\n            padding: 20px;\n            text-align: center;\n        }\n        .hero {\n            background-color: #1d1d1d;\n            color: white;\n            padding: 50px 20px;\n        }\n        .hero img {\n            width: 80%;\n            max-width: 600px;\n            margin: 20px 0;\n        }\n        h1 {\n            font-size: 2.5em;\n        }\n        h2 {\n            font-size: 1.5em;\n            margin: 10px 0;\n        }\n        .features {\n            display: flex;\n            justify-content: space-around;\n            margin: 30px 0;\n        }\n        .feature {\n            background: white;\n            border-radius: 10px;\n            padding: 20px;\n            box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n            flex: 1;\n            margin: 0 10px;\n        }\n        .cta-button {\n            background-color: #007aff;\n            color: white;\n            padding: 15px 30px;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            font-size: 1.2em;\n            text-decoration: none;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"hero\">\n            <h1>Introducing iPhone 12 Pro Max</h1>\n            <img src=\"iphone-12-pro-max.png\" alt=\"iPhone 12 Pro Max\" />\n            <h2>Experience the next level of technology</h2>\n            <p>With an amazing camera system, powerful performance, and stunning design.</p>\n            <a href=\"#buy\" class=\"cta-button\">Buy Now</a>\n        </div>\n\n        <div class=\"features\">\n            <div class=\"feature\">\n                <h3>Pro Camera System</h3>\n                <p>Capture stunning photos and videos in any lighting.</p>\n            </div>\n            <div class=\"feature\">\n                <h3>A14 Bionic Chip</h3>\n                <p>Fastest chip in a smartphone for smooth performance.</p>\n            </div>\n            <div class=\"feature\">\n                <h3>Super Retina XDR Display</h3>\n                <p>Brilliant colors and incredible contrast for an immersive experience.</p>\n            </div>\n        </div>\n\n        <div id=\"buy\">\n            <h2>Get Yours Today!</h2>\n            <p>Upgrade to the iPhone 12 Pro Max and experience excellence.</p>\n            <a href=\"purchase-link.html\" class=\"cta-button\">Purchase Now</a>\n        </div>\n    </div>\n</body>\n</html>\n```\n\n### Explanation:\n- The template starts with a standard HTML structure, including a `head` with metadata and a link to an external stylesheet.\n- A `style` block is included for basic styling.\n- The body contains a `.container` div that holds the main content.\n- The `.hero` section showcases the product name, an image, a brief description, and a call-to-action button.\n- The `.features` section highlights three standout features of the iPhone 12 Pro Max.\n- Finally, there’s a call-to-action for purchasing the product.\n\nYou can replace `\"iphone-12-pro-max.png\"` with the actual path to your product image and update any links as necessary. Make sure to customize the styles and content further to fit your brand or design guidelines.",
            "refusal": null
          },
          "logprobs": null,
          "finish_reason": "stop"
        }
      ],
      "usage": {
        "prompt_tokens": 32,
        "completion_tokens": 939,
        "total_tokens": 971,
        "prompt_tokens_details": {
          "cached_tokens": 0,
          "audio_tokens": 0
        },
        "completion_tokens_details": {
          "reasoning_tokens": 0,
          "audio_tokens": 0,
          "accepted_prediction_tokens": 0,
          "rejected_prediction_tokens": 0
        }
      },
      "service_tier": "default",
      "system_fingerprint": "fp_72ed7ab54c"
    }
    const response = extractHtmlContent(mockResponse.choices[0].message.content);
    // return response.data.choices[0].message.content;
    return ` <!DOCTYPE html> ${response}`
  } catch (error) {
    console.error(error);
  }
}

function extractHtmlContent(htmlString: any) {
  // ใช้ Regular Expression เพื่อดึงเนื้อหาที่เริ่มจาก <html> และสิ้นสุดที่ </html>
  const regex = /<html[\s\S]*<\/html>/g;
  const match = htmlString.match(regex);

  // ถ้าพบตรงกับเงื่อนไขให้คืนค่าผลลัพธ์
  return match ? match[0].trim() : null; // คืนค่า null หากไม่พบ
}
