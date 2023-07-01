import { useContext, createContext } from 'react'
import { BroadcastChannel } from 'broadcast-channel'

const pageflyChannel = new BroadcastChannel('pagefly')

const BroadcastChannelContext = createContext(pageflyChannel)

export function BroadcastChannelProvider(props) {
  return <BroadcastChannelContext.Provider value={pageflyChannel}>{props.children}</BroadcastChannelContext.Provider>
}

export function useBroadcastChannel() {
  const channel = useContext(BroadcastChannelContext)
  return channel
}
