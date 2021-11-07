import Home from './components/Home'
import UserSettings from './components/UserSettings'
import WishList from './components/WishList'
import ShoppingCart from './components/ShoppingCart'


export default [
    { path: '/', component: Home, name: 'Home' },
    { path: '/user-settings', component: UserSettings, name : 'UserSettings' },
    { path: '/wish-list', component: WishList, name: 'WishList' },
    { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' },
]