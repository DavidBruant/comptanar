//@ts-check

/**
 * 
 * @param {NodeJS.ReadStream} readableStream 
 * @returns {Promise<string>}
 */
export async function readFileInStream (readableStream){
    /** @type {Buffer[]} */
    const chunks = []
    
    for await (const chunk of readableStream) {
        chunks.push(chunk);
    }

    return Buffer.concat(chunks).toString("utf-8")
}

/**
 * @param {Buffer | string} content
 * @param {NodeJS.WritableStream} writableStream
 * @returns {Promise<void>}
 */
export async function writeFileInStream(content, writableStream){
    return new Promise((resolve, reject) => {
        writableStream.end(content)

        writableStream.on('finish', resolve)
        writableStream.on('error', reject)
    })
}
