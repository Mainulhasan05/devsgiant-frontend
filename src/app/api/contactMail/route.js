

import { transporter } from "@/app/config/nodeMailer";
import { NextResponse } from "next/server";


const htmlData = (data) => {
    let html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact mail from DevsGiant</title>
    </head>
    
    <body>
        <div style="padding: 10px;">
            <h2 style="text-align: center;">Contact mail from DevsGiant</h2>
            <p style="font-size: medium; font-weight: 600;">Name: <span style="font-weight: 400;">${data.name}</span></p>
            <p style="font-size: medium; font-weight: 600;">Email address: <span style="font-weight: 400;">${data.email}</p>
            <p style="font-size: medium; font-weight: 600;">Phone number: <span style="font-weight: 400;">${data.phoneNumber}</p>
            <p style="font-size: medium; font-weight: 600;">Message: <span style="font-weight: 400;">${data.message}</span></p>
        </div>
    </body>
    
    </html>`;

    return html;
}

export const POST = async (request) => {
    const data = await request.json();
    console.log({ data })

    if (!data.name || !data.email || !data.subject || !data.message || !data.phoneNumber) {
        return NextResponse.json({ status: false, message: "Form is incomplete!" });
    }

    const message = {
        from: `"Contact mail from DevsGiant" <${process.env.EMAIL_ADDRESS}>`,
        to: process.env.CONTACT_TO,
        replyTo: data.email,
        subject: data.subject,
        text: "Contact mail from DevsGiant",
        html: htmlData(data),
    };

    try {
        const result = await transporter.sendMail(message);
        console.log({ result });
        return NextResponse.json({ status: true, message: "Mail sended successfully", data: result });
    }
    catch (error) {
        console.log({ error })
        return NextResponse.json({ status: true, message: "Unable to send mail", data: error });
    }

}