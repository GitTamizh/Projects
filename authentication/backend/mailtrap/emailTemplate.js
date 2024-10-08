export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to [Company Name]</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1, h2, h3 {
            color: #00ff88;
            margin: 10px 0;
        }
        p, ul {
            color: #333;
            line-height: 1.6;
        }
        img {
            max-width: 100%;
            height: auto;
            justify-content: center;
            border-radius: 4px;
            margin: 20px 0;
        }
        .unsubscribe {
            margin-top: 40px;
            font-size: 0.9em;
            color: #888;
            text-align: center;
        }
        @media screen and (max-width: 600px) {
            .container {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="../images/Logo.png" alt="Welcome Image" />

        <h1><strong>Welcome to Coder's Bay! 🎉 </strong></h1>

        <img src="../images/welcome email.jpg" alt="onboarding img" />
        <p> Hi {name}!
        <p>We’re thrilled to have you on board! At <strong> Coder's Bay </strong>, we believe that our employees are our greatest asset. This onboarding process is designed to help you get settled, understand our culture, and equip you with the tools you need to succeed.</p>

        <h2>Week 1: Getting Started</h2>

        <h3>Day 1: Welcome and Orientation</h3>
        <ul>
            <li><strong>Meet the Team</strong>: Join us for a virtual or in-person welcome session where you’ll meet your team members and key stakeholders.</li>
            <li><strong>Company Overview</strong>: Learn about our mission, values, and culture. Understand how your role contributes to our goals.</li>
            <li><strong>Administrative Setup</strong>: Complete necessary paperwork, set up your accounts, and get access to our communication tools (e.g., email, Slack, etc.).</li>
        </ul>

        <h3>Day 2-5: Training and Familiarization</h3>
        <ul>
            <li><strong>Role-Specific Training</strong>: Participate in training sessions tailored to your role. This may include:
                <ul>
                    <li>Software tools and technologies</li>
                    <li>Company policies and procedures</li>
                </ul>
            </li>
            <li><strong>Job Shadowing</strong>: Spend time with your teammates to understand daily workflows and processes.</li>
            <li><strong>Check-In with Your Manager</strong>: Schedule a one-on-one to discuss your goals, expectations, and any questions you might have.</li>
        </ul>

        <h2>Week 2: Deepening Your Knowledge</h2>
        <ul>
            <li><strong>Project Overview</strong>: Get acquainted with current projects and initiatives. Review documentation and past work to understand our processes.</li>
            <li><strong>Networking Lunch</strong>: Join a team lunch (virtual or in-person) to foster relationships with colleagues from different departments.</li>
            <li><strong>Feedback Session</strong>: Schedule a check-in to discuss your onboarding experience so far and gather feedback on your progress.</li>
        </ul>

        <h2>Ongoing Support</h2>
        <ul>
            <li><strong>Mentorship Program</strong>: You will be paired with a mentor to guide you through your initial months.</li>
            <li><strong>Weekly Check-Ins</strong>: Regular one-on-one meetings with your manager to discuss your progress and any challenges you’re facing.</li>
            <li><strong>Learning Resources</strong>: Access our library of resources, including training materials, articles, and online courses.</li>
        </ul>

        <h2>Company Culture</h2>
        <ul>
            <li><strong>Values and Expectations</strong>: Familiarize yourself with our core values and what is expected in terms of performance, collaboration, and communication.</li>
            <li><strong>Employee Engagement</strong>: Participate in team-building activities and social events to build connections and engage with the company culture.</li>
        </ul>

        <h2>Additional Resources</h2>
        <ul>
            <li><strong>Employee Handbook</strong>: Review our handbook for policies on benefits, time off, and workplace conduct.</li>
            <li><strong>FAQs</strong>: Check our onboarding FAQ section for common questions and answers.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>We’re excited to see the impact you’ll make at [Company Name]! Your journey starts here, and we’re here to support you every step of the way. If you have any questions or need assistance, don’t hesitate to reach out to your manager or HR.</p>

        
        <div class="unsubscribe">
            <p>If you no longer wish to receive these emails, please <a href="your-unsubscribe-url.com">unsubscribe here</a>.</p>
        </div>
    </div>
</body>
</html>
`;