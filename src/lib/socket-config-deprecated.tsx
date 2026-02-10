// import Echo from 'laravel-echo';
// import { configureEcho } from "@laravel/echo-react";
// import Pusher from 'pusher-js';

// // @ts-ignore
// window.Pusher = Pusher;
// // @ts-ignore
// window.Echo = new Echo({
//     broadcaster: 'reverb',
//     key: import.meta.env.VITE_REVERB_APP_KEY,
//     wsHost: import.meta.env.VITE_REVERB_HOST,
//     wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
//     wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });

// import React from 'react';
// import { eventWSType } from '@/model';
// import { webSocketChannel } from '@/export';

// const connectWebSocket = () => {
// @ts-ignore
// window.Echo.channel(webSocketChannel)
// .listen('EventPrime', async (e: eventWSType) => {
// console.log(e);
// });
// }

// export const socketConfig = () => {
// React.useEffect(() => {
//     connectWebSocket();
// }, [])

// return null
// }