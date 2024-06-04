/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status, } = c
  
  return c.res({
    action: '/second',
    image: "/home/daniel/Escritorio/warpcast-frame1/frm-bnf/public/img-frame1.png",
    intents: [

    <Button>siguiente</Button>,
             
    ],
  })
})

app.frame('/second', (c) => {
  const { buttonValue, inputText, status, } = c
  
  return c.res({
    action: '/tercero',
    image: "/home/daniel/Escritorio/warpcast-frame1/frm-bnf/public/img-frame2.png",
    intents: [
     
      <Button>siguiente</Button>,
    ],
  })
})

app.frame('/tercero', (c) => {
  const { buttonValue, inputText, status, } = c
  
  return c.res({
    
    image:"/home/daniel/Escritorio/warpcast-frame1/frm-bnf/public/img-frame3.png",
    intents: [
      <Button.Link href='https://warpcast.com/~/channel/bnfarcaster'>Warpcast</Button.Link>,  
      <Button.Link href='https://www.youtube.com/@BuenasNochesFarcaster'>Youtube</Button.Link>,
    <Button.Reset>Reset</Button.Reset>,
     
          
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
