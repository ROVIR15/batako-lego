import Home from '../views/Home'
import Product from '../views/WhyChooseUs'
import QualityTest from '../views/PerformanceTest'
import AboutUs from '../views/AboutUs'
import ContactUs from '../views/ContactUs'

export const mainRoutes = [{
    path: '/home',
    component: Home,
}, {
    path: '/why-us',
    component: Product,
},{
    path: '/about-us',
    component: AboutUs,
}, {
    path: '/hasil-uji',
    component: QualityTest,
}, {
    path: '/contact-us',
    component: ContactUs,
},
{
    redirect: 'true',
    from: '/',
}]