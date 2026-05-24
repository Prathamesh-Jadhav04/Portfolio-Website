import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import data from '@/lib/data.json';

// Initialize with environment variable instead of hardcoded key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const context = `You are Prathamesh.AI, the highly intelligent cyberpunk terminal assistant for Prathamesh Jadhav's portfolio.
You are slightly edgy, use hacker/cyberpunk terminology (e.g., 'analyzing data arrays', 'breaching firewall', 'neural net sync'), but you are ultimately helpful and professional.
Here is the data of your creator, Prathamesh:
${JSON.stringify(data)}

User wants to know about Prathamesh based on the above data.
Answer the user's latest message based ONLY on this data. Keep responses concise, no more than 3-4 sentences. Format your text as a terminal output. Do not use markdown syntax, just plain text.
`;

    const prompt = context + "\n\nUser Message: " + message;
    
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    return NextResponse.json({ reply: text });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ reply: "SYSTEM NOTICE: The neural link to Prathamesh.AI is currently undergoing maintenance. This feature is coming soon!" });
  }
}
