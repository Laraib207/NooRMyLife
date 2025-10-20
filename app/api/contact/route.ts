import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Message from '@/lib/models/Message'

export async function POST(request: NextRequest) {
  try {
    const db = await dbConnect()

    // If no database connection, simulate success for development
    if (!db) {
      console.log('No database connection - simulating successful message save')
      return NextResponse.json(
        { message: 'Message sent successfully (development mode)!' },
        { status: 201 }
      )
    }

    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create new message
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    })

    await newMessage.save()

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving message:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
