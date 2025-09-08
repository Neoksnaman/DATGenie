
'use server';

import nodemailer from 'nodemailer';

const { 
    EMAIL_SERVER_HOST, 
    EMAIL_SERVER_PORT, 
    EMAIL_SERVER_USER, 
    EMAIL_SERVER_PASSWORD,
    EMAIL_FROM
} = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_SERVER_HOST,
  port: Number(EMAIL_SERVER_PORT),
  secure: true, // true for 465
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASSWORD,
  },
  requireTLS: true,
});

export async function sendVerificationEmail(to: string, name: string, link: string) {
    const mailOptions = {
        from: EMAIL_FROM,
        to,
        subject: 'DATGenie: Verify Your Email Address',
        html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>DATGenie Account Verification</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: 'Inter', Arial, sans-serif;
                        background-color: #E0F7FA;
                    }
                    .container {
                        padding: 20px;
                        background-color: #E0F7FA;
                    }
                    .card {
                        background-color: #ffffff;
                        border-radius: 8px;
                        padding: 40px;
                        margin: 40px auto;
                        max-width: 600px;
                        text-align: center;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    }
                    .logo {
                        margin-bottom: 20px;
                    }
                    h2 {
                        color: #333333;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    p {
                        color: #555555;
                        font-size: 16px;
                        line-height: 1.5;
                        margin-bottom: 20px;
                    }
                    .button {
                        background-color: #29ABE2;
                        color: #ffffff !important;
                        padding: 8px 25px;
                        text-decoration: none;
                        border-radius: 5px;
                        display: inline-block;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .footer {
                        text-align: center;
                        font-size: 12px;
                        color: #888888;
                        margin-top: 20px;
                    }
                    .note {
                        font-size: 12px; 
                        color: #555;
                        margin-top: 30px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="card">
                        <img src="https://dat-genie.vercel.app/logo.png" alt="DATGenie Logo" width="60" class="logo">
                        <h2>Hello ${name},</h2>
                        <p>Thank you for signing up for DATGenie! To complete your registration, please verify your email address by clicking the button below:</p>
                        <a href="${link}" class="button" style="color: #ffffff;">Verify</a>
                        <p class="note">Please note: This verification link is valid for one hour only.</p>
                    </div>
                    <div class="footer">
                        <p>If you did not sign up for this account, you can safely ignore this email.</p>
                        <p>&copy; ${new Date().getFullYear()} DATGenie. All Rights Reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent to:', to);
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Could not send verification email.');
    }
}


export async function sendPasswordResetEmail(to: string, link: string) {
    const mailOptions = {
        from: EMAIL_FROM,
        to,
        subject: 'DATGenie: Password Reset Request',
        html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>DATGenie Password Reset</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: 'Inter', Arial, sans-serif;
                        background-color: #E0F7FA;
                    }
                    .container {
                        padding: 20px;
                        background-color: #E0F7FA;
                    }
                    .card {
                        background-color: #ffffff;
                        border-radius: 8px;
                        padding: 40px;
                        margin: 40px auto;
                        max-width: 600px;
                        text-align: center;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    }
                    .logo {
                        margin-bottom: 20px;
                    }
                    h2 {
                        color: #333333;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    p {
                        color: #555555;
                        font-size: 16px;
                        line-height: 1.5;
                        margin-bottom: 20px;
                    }
                    .button {
                        background-color: #29ABE2;
                        color: #ffffff !important;
                        padding: 8px 25px;
                        text-decoration: none;
                        border-radius: 5px;
                        display: inline-block;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .footer {
                        text-align: center;
                        font-size: 12px;
                        color: #888888;
                        margin-top: 20px;
                    }
                    .note {
                        font-size: 12px; 
                        color: #555;
                        margin-top: 30px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="card">
                        <img src="https://dat-genie.vercel.app/logo.png" alt="DATGenie Logo" width="60" class="logo">
                        <h2>Password Reset Request</h2>
                        <p>We received a request to reset your password. If you did not make this request, you can ignore this email. Otherwise, you can reset your password using this link:</p>
                        <a href="${link}" class="button" style="color: #ffffff;">Reset Password</a>
                        <p class="note">Please note: This password reset link is valid for one hour only.</p>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} DATGenie. All Rights Reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Password reset email sent to:', to);
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw new Error('Could not send password reset email.');
    }
}
