import { response } from "express";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { sender, transporter } from "./mailtrap.config.js";

export const sendVerificationEmail = async (emails, verificationToken) => {
    const recipients = emails.join(", ");

    try {
        const response = await transporter.sendMail({
            from:sender,
            to:recipients,
            subject:"Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log("email sent successfully", response);
        
    } catch (error) {
        console.error(`Error sending verification`, error);
        
        throw new Error(`Error sending verification email:${error}`);
        
    }

}

export const sendWelcomeEmail = async (emails, name) => {
    const recipients = emails.join(",")
    try {
        const response = await transporter.sendMail({
            from:sender,
            to:recipients,
            subject:"Welcome email",
            html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
            category: "welcome email"
        })

        console.log(" welcome email sent successfully", response);
    } catch (error) {
        console.error(`Error sending welcome mail`, error);

        throw new Error(`Error sending welcome email:${error}`);
    }
}

export const sendPasswordResetMail = async (email, resetURL) => {
    const recipient = email

    try {
        const response = await transporter.sendMail({
            from:sender,
            to:recipient,
            subject:"Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password reset"
        })

    } catch (error) {
        console.error(`Error in sending reset password email`, email);

        throw new Error(`Error in sending reset password email: ${email}`);
        
        
    }
} 

export const sendResetSuccessEmail = async (email) => {

    const recipient = email;

    try {
        const response = await transporter.sendMail({
            from:sender,
            to:recipient,
            subject:"Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password reset"
        })
        console.log("Password reset email sent successfully", response);
    } catch (error) {
        console.error(`Error in sending password reset success email`, error);
        throw new Error(`Error in sending password reset success email: ${error}`);
        
    }
}