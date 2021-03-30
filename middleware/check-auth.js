export default function(context){
    console.log('middleware========== check-auth')
    //console.log('middleware========== context.req',context.req)
    //if(process.client){
    //}
    if(context.req){//process.server
        //console.log('-----middleware check-auth------',context.req.rawHeaders)
        var arrayToString = JSON.stringify(Object.assign({}, context.req.rawHeaders));
        console.log('-----middleware check-auth------',arrayToString)
        //console.log('-----middleware check-auth------',context.req.jwt)
       // context.store.dispatch('initAuth', context.req)
    }
}