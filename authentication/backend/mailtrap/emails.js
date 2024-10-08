import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplate.js";
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
