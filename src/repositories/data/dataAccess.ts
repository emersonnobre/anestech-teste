import { writeFileSync,  } from 'fs'
import path from 'path'

export default function getData() {
    const data = require('./heroes.json')
    return data.heroes
}

export function writeData(data: unknown) {
    try {
        const jsonString = JSON.stringify(data, null, 2); // Pretty-print with indentation
        writeFileSync(path.resolve(__dirname, 'heroes.json') , jsonString); 
    } catch(err) {
        console.log('[writeData]', err)
    }
}