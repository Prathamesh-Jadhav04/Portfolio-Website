import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (e) {
      console.warn('[Contact API Warning] Empty or invalid JSON payload received.');
      return NextResponse.json(
        { error: 'Invalid request. JSON payload is required.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body || {};

    // Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = (process.env.CONTACT_RECEIVER_EMAIL || 'Prathamesh.Jadhav.Office@gmail.com').toLowerCase();
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || 'onboarding@resend.dev';

    console.log(`[Contact Form Ingestion] Received from ${name} (${email}): Subject: "${subject}"`);

    if (resendApiKey) {
      // Send via Resend REST API
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: `Portfolio Contact <${senderEmail}>`,
          to: recipientEmail,
          subject: `Portfolio: ${subject}`,
          reply_to: email,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
              <h2 style="color: #ffb400; border-bottom: 2px solid #ffb400; padding-bottom: 10px;">New Message from Portfolio</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px; border-left: 4px solid #ffb400;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="margin-top: 30px; font-size: 0.8rem; color: #888;">Submitted via Prathamesh Jadhav Portfolio</p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error('[Resend Error Response]', errorText);
        throw new Error('Failed to transmit message via Resend service.');
      }

      console.log('[Contact Form] Message transmitted successfully via Resend API.');
      return NextResponse.json({ success: true, method: 'resend' });
    } else {
      // Simulation mode
      console.log('[Contact Form Simulation Mode] Processed message:');
      console.log(`- Body: "${message}"`);
      console.log('To set up real emails, configure RESEND_API_KEY in your .env file.');
      
      // Artificial delay to make transition look realistic and high fidelity
      await new Promise((resolve) => setTimeout(resolve, 1200));

      return NextResponse.json({ success: true, method: 'simulation' });
    }
  } catch (error: any) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error occurred.' },
      { status: 500 }
    );
  }
}
