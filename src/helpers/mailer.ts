import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'



export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      console.log("I am reset");
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    } else {
      console.log("Invalid emailType");
    }


      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "46cc5fcf1256da",
          pass: "6c92a12b705bab"
        }
    });

    const mailOptions = {
      from: 'sunnypatel.koder@gmail.com',
      to: email,
      subject: emailType === 'VERIFY' ? 'VERIFY YOUR EMAIL': 'RESET YOUR PASSOWRD',
      html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType === 'VERIFY' ? 'verify your email' : 'reset your password'}</p>`
    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;

    
  } catch (error:any) {
    throw new Error(error.message)
    
  }

}