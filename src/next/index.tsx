import React from 'react'
import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

async function runApp() {
  try {
    const View = (await import('./views/login')).default
    render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <View />
        </QueryClientProvider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  } catch (e) {
    // Do nothing.
  }
}

runApp()
