---
sidebar_position: 1
---

# Chat Assistant

## Introduction

Welcome to the documentation for our AI-powered LiveChat support app! Our app is designed to enhance the customer service experience and make LiveChat support more efficient and effective. This documentation will provide you with a comprehensive guide on how to use our app's various features and tools, including AI-powered text expansion, personalized message tone, grammar correction, real-time assistance, and customizable keyboard shortcuts. With this information, you'll be able to use our app to its full potential and provide your customers with the best possible service. Let's get started!

## Initial setup

1. Install the app from <a href="https://www.livechat.com/marketplace/apps/chat-assistant" target="_blank">the LiveChat Marketplace</a>
2. In the LiveChat Agent Application, go to **Settings > Manage apps > Chat Assistant**.
3. Authorize the application.
4. For start you will get **5k** [tokens](#tokens) completely **free** from us!
5. Your app is ready to go!

![](images/ca1.png)

## Tokens

In this AI-powered LiveChat support app, OpenAI is used to provide features such as text expansion, personalized message tone, grammar correction, real-time assistance, and customizable keyboard shortcuts. This is achieved through tokenization, which is the process of breaking down input text into smaller units, called tokens, that the AI model can understand and generate text based on. These tokens are then processed by the model to generate meaningful responses, making the LiveChat support more efficient and effective.

You can think of tokens as pieces of words, where 1,000 tokens is about 750 words.

## Usage and examples

### Make more friendly

This feature adjusts the tone of the generated response to be more conversational and approachable.

### Make more formal

This feature adjusts the tone of the generated response to be more professional and formal.

### Rephrase

This feature generates alternative phrasing for a given input, allowing for greater clarity and customization of responses.

### Expand

This feature uses AI to generate additional text based on a given input, allowing for more comprehensive and detailed responses.

### Fix grammar

This feature uses AI to identify and correct grammatical errors in generated responses, ensuring the output is clear and accurate.

![](images/ca2.png)

### Examples

```
Before: hi, please provide your account details
Make more friendly: Hello there! Could you please provide me with your account information so I can better assist you?
```

- Token count: 51

```
Before: hi, please provide your account details
Make more formal: Good day! Could you please provide your account information so that we can further assist you?
```

- Token count: 54

```
Before: hi, please provide your account details
Rephrase: Hello there! Could you please kindly provide us with your account information so we can help you further?
```

- Token count: 55

```
Before: hi, please provide your account details
Expand: Hi there! Thank you for reaching out with your issue. In order to help you further, I will need some additional information from you. Can you please provide me with your account details so that I can take a closer look? Thank you!
```

- Token count: 89

```
Before: hi, please provide your account details
Fix grammar: Hi, please provide your account details.
```

- Token count: 32

## Pricing

The app is free to use, and with the initial installation, you will receive 5k tokens. Chat inputs vary in length, so it's hard to calculate the average usage for your account. However, that amount of tokens should give you and your team a nice overview of the app.

When your tokens will expire, you can top-up your account using In-App Upgrades from the Settings section. We will also send you an email reminding you that your tokens are about to expire.

![](images/ca3.png)

## Privacy

Chat Assistant sends the text needed to fulfil a user's request to OpenAI through its API. SKlabs does not use customer content to train AI models and does not opt in to sharing API content with OpenAI for model training. OpenAI states that API data is not used to train its models unless a customer explicitly opts in.

Requests are configured not to create provider-side application state. Under OpenAI's standard API controls, prompts and responses may nevertheless be retained in abuse-monitoring logs for up to 30 days, unless OpenAI must retain them longer for legal or safety reasons or different approved data controls apply. See [OpenAI's API data controls](https://platform.openai.com/docs/guides/your-data) for details.

SKlabs encrypts stored Chat Assistant input and output at rest, and data is encrypted in transit using TLS. The product does not currently provide automated PII masking or anonymisation, so customers should avoid submitting personal or sensitive information that is not necessary for the request.

For further details, including retention, data-subject rights, and international transfers, see the [SKlabs Privacy Policy](https://sklabs.dev/privacy-policy). Questions or deletion requests can be sent to [support@sklabs.dev](mailto:support@sklabs.dev).

## Feedback and feature request

You can send us your feedback and feature requests at [support@sklabs.dev](mailto:support@sklabs.dev).
