'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiEye,
  FiEyeOff,
  FiTrash2,
  FiRefreshCw,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi'

interface Message {
  _id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
  read: boolean
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/messages')
      if (!response.ok) throw new Error('Failed to fetch messages')
      const data = await response.json()
      setMessages(data.messages)
    } catch (err) {
      setError('Failed to load messages')
      console.error('Error fetching messages:', err)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (id: string, read: boolean) => {
    try {
      const response = await fetch('/api/messages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, read })
      })
      if (!response.ok) throw new Error('Failed to update message')
      setMessages(messages.map(msg =>
        msg._id === id ? { ...msg, read } : msg
      ))
    } catch (err) {
      console.error('Error updating message:', err)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const unreadCount = messages.filter(msg => !msg.read).length

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <FiRefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-indigo-600" />
          <p className="text-gray-600 dark:text-slate-400">Loading messages...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Message Inbox
              </h1>
              <p className="text-gray-600 dark:text-slate-400">
                Manage contact form submissions
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <FiMail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {unreadCount} unread
                </span>
              </div>
              <button
                onClick={fetchMessages}
                className="p-2 text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="Refresh"
              >
                <FiRefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <FiXCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="text-red-800 dark:text-red-200">{error}</span>
            </div>
          </motion.div>
        )}

        {/* Messages List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-slate-700">
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  All Messages ({messages.length})
                </h2>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 dark:text-slate-400">
                    <FiMail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No messages yet</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <motion.div
                      key={message._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 border-b border-gray-100 dark:border-slate-700 cursor-pointer transition-colors ${
                        selectedMessage?._id === message._id
                          ? 'bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-l-indigo-500'
                          : 'hover:bg-gray-50 dark:hover:bg-slate-700/50'
                      } ${!message.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white truncate">
                          {message.name}
                        </h3>
                        {!message.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-slate-400 truncate mb-1">
                        {message.subject}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-slate-500">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </p>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 dark:border-slate-700">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedMessage.subject}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <FiUser className="w-4 h-4" />
                          {selectedMessage.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMail className="w-4 h-4" />
                          {selectedMessage.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {new Date(selectedMessage.createdAt).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => markAsRead(selectedMessage._id, !selectedMessage.read)}
                        className={`p-2 rounded-lg transition-colors ${
                          selectedMessage.read
                            ? 'text-gray-400 hover:text-gray-600 dark:hover:text-slate-300'
                            : 'text-blue-600 hover:text-blue-700'
                        }`}
                        title={selectedMessage.read ? 'Mark as unread' : 'Mark as read'}
                      >
                        {selectedMessage.read ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <FiMessageSquare className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white whitespace-pre-wrap leading-relaxed">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 dark:bg-slate-700/50 border-t border-gray-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {selectedMessage.read ? (
                        <>
                          <FiCheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600 dark:text-green-400">Read</span>
                        </>
                      ) : (
                        <>
                          <FiClock className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-blue-600 dark:text-blue-400">Unread</span>
                        </>
                      )}
                    </div>
                    <button
                      onClick={() => window.open(`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-12 text-center">
                <FiMail className="w-16 h-16 text-gray-300 dark:text-slate-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Select a message
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Choose a message from the list to view its details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
