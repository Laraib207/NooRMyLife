import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Message from '@/lib/models/Message'

export async function GET(request: NextRequest) {
  try {
    const db = await dbConnect()

    // If no database connection, return empty array for development
    if (!db) {
      console.log('No database connection - returning empty messages array')
      return NextResponse.json({ messages: [] })
    }

    const messages = await Message.find({}).sort({ createdAt: -1 })

    return NextResponse.json({ messages })
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const db = await dbConnect()

    // If no database connection, simulate success for development
    if (!db) {
      console.log('No database connection - simulating message update')
      return NextResponse.json({ message: { _id: 'dev', read: true } })
    }

    const { id, read } = await request.json()

    if (!id) {
      return NextResponse.json(
        { error: 'Message ID is required' },
        { status: 400 }
      )
    }

    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { read },
      { new: true }
    )

    if (!updatedMessage) {
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: updatedMessage })
  } catch (error) {
    console.error('Error updating message:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
