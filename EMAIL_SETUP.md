# Email Configuration Setup

This document explains how to configure the email functionality for the contact form.

## Prerequisites

The contact form uses Gmail's SMTP server to send emails. You'll need:
- A Gmail account (ndingajonathan96@gmail.com is already configured)
- A Gmail App Password (NOT your regular Gmail password)

## Steps to Set Up

### 1. Generate a Gmail App Password

Since Gmail requires 2-factor authentication for app access, you need to create an "App Password":

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords**: https://myaccount.google.com/apppasswords
5. Select **Mail** as the app
6. Select **Other (Custom name)** as the device
7. Enter "Tumaini Jipya Website" as the name
8. Click **Generate**
9. Copy the 16-character password (you won't be able to see it again)

### 2. Update the .env File

Open the `.env` file in the project root and update the `EMAIL_PASSWORD`:

```env
EMAIL_USER=ndingajonathan96@gmail.com
EMAIL_PASSWORD=your-16-character-app-password-here
```

Replace `your-16-character-app-password-here` with the App Password you generated.

**Important:** Never commit the `.env` file to version control. It's already in `.gitignore`.

### 3. Test the Configuration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: http://localhost:3000/contact

3. Fill out and submit the form

4. Check the inbox of ndingajonathan96@gmail.com for the test email

## Form Validation Rules

The contact form includes the following validation:

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Subject**: Required, must select an option
- **Message**: Required, minimum 10 characters
- **Privacy**: Must be checked

## Troubleshooting

### "Invalid credentials" Error

- Make sure you're using an **App Password**, not your regular Gmail password
- Check that 2-Step Verification is enabled on your Google account
- Verify the App Password is correctly copied (no spaces)

### "Failed to send email" Error

- Check your internet connection
- Verify Gmail SMTP is not blocked by your network
- Ensure the environment variables are loaded (restart the dev server)

### Email Not Received

- Check your spam/junk folder
- Verify the email address in the API endpoint (server/api/contact.post.ts)
- Check the server console for error messages

## Production Deployment

For Netlify deployment, add the environment variables in the Netlify dashboard:

1. Go to your site in Netlify
2. Navigate to **Site settings** > **Environment variables**
3. Add the following variables:
   - `EMAIL_USER`: ndingajonathan96@gmail.com
   - `EMAIL_PASSWORD`: your-app-password

## Email Template

The email sent includes:
- Sender's name
- Sender's email (set as reply-to)
- Phone number (if provided)
- Selected subject
- Message content
- Timestamp and source information

## Security Notes

- Email credentials are stored in environment variables
- The API endpoint is server-side only (not exposed to clients)
- Email validation is performed on both client and server
- The API includes rate limiting protection through Nuxt's built-in features
