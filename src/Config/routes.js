import Home from '../Components/Home.vue';
import SunInformations from '../Components/SunInformations.vue';
import SalesForce from '../Components/SalesForce.vue';
import ConnectedVivo from '../Components/ConnectedVivo.vue';
import ComunicateView from '../Components/ComunicateView.vue';
import TurbineSales from '../Components/TurbineSales.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/sun-informations', name: 'sunInformations', component: SunInformations, props: true },
    { path: '/sales-force', name: 'salesForce', component: SalesForce, props: true },
    { path: '/connected-vivo', name: 'connectedVivo', component: ConnectedVivo, props: true },
    { path: '/turbine-sales', name: 'turbineSales', component: TurbineSales, props: true },
    { path: '/comunicate/:comunicateId', name: 'comunicate', component: ComunicateView },
];

export default routes;