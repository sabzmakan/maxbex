import Vuex from 'vuex'
import Cookie from 'js-cookie'
// import axios from "axios";
// import env from "~/env.js";

const createStore = ()=> {
    return new Vuex.Store({
        state: {
            token: '',
            email: '',
            biData:[],
            user: {},
            selectedAccount:{},
            balances: [],
            accounts: []
        },
        mutations: {
            // ye kalak baraye mutate
            mutationer(state, payload) {
                let keys = Object.keys(payload);
                for (let item of keys) {
                    state[item] = payload[item]
                }
            },
            setToken(state,token){
                state.token =token
            },
            setEmail(state,email){
                state.email =email
            },
            setAccount(state,account){
                state.selectedAccount =account
            },
            setBalances(state,balances){
                state.balances =balances
            },
            setUser(state,data){
                state.user =data
            },
            setBiData(state,biData){
                state.biData =biData
            }
        },
        actions: {
            async nuxtServerInit({} , {app , store}) {
                let token = app.$cookies.get('TOKEN');
                store.commit('mutationer' , {token : token})
            },
            // nuxtServerInit(vuexContext,context){
            //     return new Promise((resolve,reject)=>{
            //         setTimeout(()=>{
            //             vuexContext.commit('setAccount',{
            //                 id:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNramxudGh1bzBlc2cwNzU2ZWtudGc2c2siLCJpYXQiOjE2MTU4MjMyMTZ9.xucnWeJU0ftRjZ30nff6kEiy6oGLljpoDhPjtsPtw0M',
            //                 name:'bin2',
            //                 apiKey:'QKRZXvrnMhCZFBf5yXZHru8yEbScutbFVUqtfPrkhXFclMPEdvRPsq16WJEqiV3O',
            //                 description:'qwertyukjnbvcfghjkloiuytresdfvbnm,.lkjuhygtfrdcvbnm,.lkjuhgcvbnm,lkijuhg'
            //             })
            //         })
            //     })
            // },
            setToken(vuexContext,token){
                vuexContext.commit('setToken',token)
                localStorage.setItem("token",token);
                localStorage.setItem("expirationDate", new Date().getTime()+3600);

                this.$cookies.set('TOKEN', token, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7,
                    // maxAge = Expire : Sec * Min * Hour * Day = 1 week,
                  })
                   
                // Cookie.set('jwt',token)
                // Cookie.set('expirationDate',new Date().getTime() +3600)
                //Cookie.set('expirationDate',expirationDate)bayad be argoman ezafe beshe agar dynamic,agar back nemifreste sabet tarif kpn ,masalan 1 h=3600

                // if(!!this.state.token){
                //     alert('authentication successful!')
                // }
            },
            // setUser(vuexContext,token){
            //     vuexContext.commit('setUser',token)
            //     // if(!!this.state.token){
            //     //     alert('authentication successful!')
            //     // }
            // },
            setEmail(vuexContext,email){
                vuexContext.commit('setEmail',email)
                // if(!!this.state.token){
                //     alert('authentication successful!')
                // }
            },
            setAccount(vuexContext,account){
                vuexContext.selectedAccount =account
            },
            setUser(vuexContext,data){
                vuexContext.commit('setUser',data)
            },
            setAccount(vuexContext,account){
                vuexContext.commit('setAccount',account)
            },
            setBalances(vuexContext,balances){
                vuexContext.commit('setBalances',balances)
            },
            setBiData(vuexContext,biData){
                vuexContext.commit('setBiData',biData)
                console.log(biData)
            },
            initAuth(vuexContext,req){
                let token
                //let expirationDate
                if(req){
                    if(!req.headers.cookie){
                        return
                    }
                    const jwtCookie = req.headers.cookie.split(';')
                    .find(c=>c.trim().startsWith('jwt='))
                    if(!jwtCookie){
                        return
                    }
                    token= jwtCookie.split('=')[1]
                    console.log('---------token',token)
                    // expirationDate = req.headers.cookie.split(';')
                    // .find(c=>c.trim().startsWith('expirationDate=')).split('=')[1]

                }else{//clientside
                    token=localStorage.getItem('token')
                //expirationDate=localStorage.getItem('expirationDate')
                // if(new Date().getTime()> expirationDate || !token){
                //     return;
                // }
                if(!token){
                        return;
                    }
                vuexContext.commit('setToken',token)
                }
                
            },
            logout(vuexContext){
                vuexContext.commit('setToken','')
                localStorage.setItem('token','')
                localStorage.setItem('expirationDate',0)
                //localStorage.removeItem('expirationDate')
                Cookie.remove('jwt')
                Cookie.remove('expirationDate')
                $nuxt.$router.push({ path: '/' });
                alert('با موفقیت خارج شدید')
            }
        },
        getters: {
            isLogedIn(state){
                if(!state.token){
                    return false
                }else{
                    return true
                }
            }
        }
    })
}
export default createStore