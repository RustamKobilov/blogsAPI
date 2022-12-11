const http=require('http');
const fs = require('fs');


const delay =(ms) => {
    return new Promise ((resolve,reject)=> {
        setTimeout(()=>{
            resolve()
        },ms)
    })
}
const readFileSync=(path) => {
    return new Promise((resolve, reject) => {
        fs.readFileSync('pagers/about.html',(err,data)=>{
            if(err)reject('500 error')
            else resolve(data)
        })
    })
}

const server =http.createServer(async (requst, response) => {
    switch (requst.url) {
        case'/home': {
            try {
                const data = await readFileSync('pagers/about.html')
                response.write(data)
                response.end()

            }catch (e) {
                response.write(e + " ypal")
                response.end()
            }
            break;
        }
        case'/about': {
            await delay(3000)
            response.write('yutt')
            response.end()
            break;
        }
        default: {
            response.write('404 not found')
            response.end()
        }

    }
})

server.listen('3003');