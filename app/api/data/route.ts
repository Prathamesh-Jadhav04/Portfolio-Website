import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'lib', 'data.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(fileContents));
  } catch {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    fs.writeFileSync(dataFilePath, JSON.stringify(body, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
  }
}
