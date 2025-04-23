require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendEmail({ to, subject, html }) {
    // Extract token from html content
    const tokenMatch = html.match(/token=([^"&]+)|<code>([^<]+)<\/code>/);
    const token = tokenMatch ? (tokenMatch[1] || tokenMatch[2]) : 'No token found';

    // Log details for manual verification
    console.log('\n=== MANUAL VERIFICATION INFO ===');
    console.log('Email:', to);
    console.log('TOKEN:', token);
    console.log('==============================\n');

    // Return success to prevent errors
    return Promise.resolve();
}

module.exports = sendEmail;