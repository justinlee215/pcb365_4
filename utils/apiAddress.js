export let apiAddress;
    
if (process.env.NODE_ENV === 'productions') {
    apiAddress = 'https://pcb365-4-8zxrritcr-justinlee215.vercel.app'
} else {
    apiAddress = 'http://localhost:3000'
}



