import express from "express";

const a:string="sreeman"
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("hello world")
})
function test<T>(){
   let a = 5
   const p=new Promise((res,rej)=>{
        setTimeout(()=>{a=10;res(a)},2000);

   }

     )
  return p
}
app.listen(3000, () => {
    console.log("server is running")
    test.then((res)=>console.log(res))
    

})
