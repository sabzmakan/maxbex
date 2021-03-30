export default function({store,redirect}){
    console.log('-----------middleware auth')
    if(!store.state.token)   return redirect('/') ;
    return true
    
   //  if(process.client){
   //      // console.log('context.store2:hello')
   //      alert('please Login')
   //   }
}