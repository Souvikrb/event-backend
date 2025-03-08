
const nodemailer = require("nodemailer");
const User = require("../models/auth");
const bcrypt = require('bcrypt');
var otpStorage = {}; // Temporary storage for OTPs

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "souvikraybarman@gmail.com",
        pass: process.env.APP_PASSWORD, // Use App Password if 2FA is enabled
    },
});

exports.sendEmailOtp = async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);

    otpStorage[email] = otp;

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is ${otp}`,
    };
    //return res.status(200).json({ success: true, message: "OTP sent successfully." });
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).json({ success: false, message: "Please enter a valid email id" });
        } else {
            res.status(200).json({ success: true, message: "OTP sent successfully." });
        }
    });
}

exports.verifyEmailOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (otpStorage[email] && otpStorage[email] === parseInt(otp, 10)) {
        delete otpStorage[email];
        res.status(200).json({ success: true, message: "OTP verified successfully." });
    } else {
        res.status(400).json({ success: false, message: "Invalid OTP." });
    }
}

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
        email
    });
    if (!user) {
        return res.status(400).json({ success: false, message: "This email is not registered in our system. Please check the email address and try again." });
    }

    //Generate a random password with 8 characters a combination of numbers and alphabets uppercase and lowercase
    const password = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    await User
        .findOneAndUpdate({ email }, { password: hashedPassword })
        .then(() => {
            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: "Password Reset",
                text: `Dear User,\n\nYour password has been successfully reset. Below is your new password:\n\nNew Password: ${password}\n\nFor security reasons, we recommend changing your password after logging in. If you did not request this change, please contact our support team immediately.\n\nBest regards,\n${process.env.COMPANY_NAME}`,
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.status(500).json({ success: false, message: "Error sending email." });
                } else {
                    res.status(200).json({ success: true, message: "Password sent to your email. Please login to continue." });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: "Error updating password." });
        });
}






