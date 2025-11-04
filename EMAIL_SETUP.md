# Email Configuration Setup

This document explains how to configure the email functionality for the contact form using Resend.

## Why Resend?

Resend is a modern email API service designed for developers:
- **Easy setup** - No complex SMTP configuration
- **Free tier** - 100 emails/day, 3,000 emails/month
- **Fast** - Sends emails in milliseconds
- **Reliable** - Professional email delivery service
- **No authentication headaches** - Simple API key setup

## Prerequisites

You'll need:
- A Resend account (free to sign up)
- An API key from Resend

## Steps to Set Up

### 1. Create a Resend Account

1. Go to: https://resend.com
2. Click **"Sign Up"** or **"Get Started"**
3. Sign up with your email (you can use ndingajonathan96@gmail.com)
4. Verify your email address

### 2. Get Your API Key

1. Log in to your Resend dashboard: https://resend.com/api-keys
2. Click **"Create API Key"**
3. Give it a name like "Tumaini Jipya Website"
4. Select **"Sending access"** permission
5. Click **"Create"**
6. Copy the API key (it starts with `re_` and looks like `re_xxxxxxxxxxxxx`)

**Important:** Save this key immediately - you won't be able to see it again!

### 3. Update the .env File

Open the `.env` file in the project root and update the `RESEND_API_KEY`:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

Replace `re_your_actual_api_key_here` with the API key you copied from Resend.

**Important:** Never commit the `.env` file to version control. It's already in `.gitignore`.

### 4. Test the Configuration

1. Restart the development server (to load the new environment variable):
   ```bash
   # Kill existing servers and restart
   npm run dev
   ```

2. Navigate to the contact page: http://localhost:3000/contact

3. Fill out and submit the form

4. Check the inbox of ndingajonathan96@gmail.com for the test email

**Note:** In development, Resend will send from `onboarding@resend.dev`. This is normal for testing.

## Form Validation Rules

The contact form includes the following validation:

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Subject**: Required, must select an option
- **Message**: Required, minimum 10 characters
- **Privacy**: Must be checked

## Troubleshooting

### "Email service not configured" Error

- Make sure the `.env` file exists in the project root
- Verify that `RESEND_API_KEY` is set in the `.env` file
- Restart the development server after adding the API key
- Check that the API key starts with `re_`

### "Failed to send email" Error

- Verify your API key is correct (no extra spaces or characters)
- Check that your Resend account is active
- Check your internet connection
- Look at the server console for detailed error messages
- Ensure you haven't exceeded the free tier limit (100 emails/day)

### Email Not Received

- Check your spam/junk folder
- Verify the recipient email in server/api/contact.post.ts (line 44)
- Check the Resend dashboard logs: https://resend.com/emails
- The Resend logs show all sent emails and their delivery status

### "Rate limit exceeded" Error

- Free tier: 100 emails/day, 3,000 emails/month
- Consider upgrading your Resend plan if you need more
- Check your Resend dashboard for usage statistics

## Production Deployment

For Netlify deployment, add the environment variable in the Netlify dashboard:

1. Go to your site in Netlify
2. Navigate to **Site settings** > **Environment variables**
3. Add the following variable:
   - Key: `RESEND_API_KEY`
   - Value: Your Resend API key (starts with `re_`)
4. Redeploy your site

## Email Template

The email sent includes:
- Sender's name
- Sender's email (set as reply-to)
- Phone number (if provided)
- Selected subject
- Message content
- Timestamp and source information

## Using a Custom Domain (Optional)

By default, emails are sent from `onboarding@resend.dev`. To use your own domain:

1. Add your domain in Resend: https://resend.com/domains
2. Follow the DNS configuration steps (add SPF, DKIM records)
3. Update the `from` field in `server/api/contact.post.ts`:
   ```typescript
   from: 'Tumaini Jipya <contact@tumaini-jipya.org>',
   ```

## Resend Free Tier Limits

- **100 emails per day**
- **3,000 emails per month**
- Perfect for contact forms on most small to medium websites
- Upgrade available if you need more

## Security Notes

- API key is stored in environment variables
- The API endpoint is server-side only (not exposed to clients)
- Email validation is performed on both client and server
- Resend handles rate limiting automatically
- Never commit the `.env` file to version control
