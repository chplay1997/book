import { createContext, useContext, useEffect } from 'react'
import { io } from 'socket.io-client'

const SocketContext = createContext(null)

export const SocketProvider = props => {
  if (window.location.pathname === '/install') {
    return props.children
  }

  return <SocketContext.Provider value={{ appSocket: 'test' }}>{props.children}</SocketContext.Provider>
}

export const useSocket = () => {
  const { appSocket } = useContext(SocketContext)
  return {
    appSocket,
  }
}
