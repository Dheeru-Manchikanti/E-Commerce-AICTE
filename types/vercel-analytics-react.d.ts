declare module '@vercel/analytics/react' {
  import * as React from 'react'
  export const Analytics: React.ComponentType<Record<string, unknown>>
}
