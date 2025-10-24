import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

import HomeView from '../views/index.vue';
import Login from '@/modules/auth/views/Login.vue';
import Dashboard from '@/modules/dashboard/views/Dashboard.vue';
import Doc from '@/modules/dashboard/views/Doc.vue';
import Categorie from '@/modules/dashboard/views/Categorie.vue';
import Type from '@/modules/dashboard/views/Type.vue';
import TypeCat from '@/modules/dashboard/views/TypeCat.vue';
import Confirm from '@/modules/dashboard/views/Confirm.vue';
import Wtm from '@/modules/dashboard/views/Wtm.vue';
import About from '@/modules/dashboard/views/About.vue';
import Event from '@/modules/dashboard/views/Event.vue';
import Hire from '@/modules/dashboard/views/Hire.vue';
import Equipe from '@/modules/dashboard/views/Equipe.vue';
import Contact from '@/modules/dashboard/views/Contact.vue';
import Patners from '@/modules/dashboard/views/Patners.vue';
import Galerie from '@/modules/dashboard/views/Galerie.vue';
import Annuaire from '@/modules/dashboard/views/Annuaire.vue';
import Portfolio from '@/modules/dashboard/views/Portfolio.vue';
import Terminal from '@/modules/dashboard/views/Terminal.vue';
// import Shuri from '@/modules/dashboard/views/Shuri.vue';
import Profile from '@/modules/dashboard/views/Profile.vue';
import Search from '@/modules/dashboard/views/Search.vue';
import Food from '@/modules/dashboard/views/Food.vue';
import FoodDetail from '@/modules/dashboard/views/FoodDetail.vue';
import IretiHome from '@/modules/dashboard/views/IretiHome.vue';
import Doha from '@/modules/dashboard/views/Doha.vue';
import Proud from '@/modules/proud/views/Proud.vue';
import Prompt from '@/modules/prompt/views/Home.vue';
import PromptList from '@/modules/prompt/views/List.vue';
import PromptDetail from '@/modules/prompt/views/Details.vue';
import PromptCreate from '@/modules/prompt/views/Create.vue';
import ProfileView from '@/modules/prompt/views/Profil.vue';
import LeaderBoard from '@/modules/prompt/views/LeaderBoard.vue';
import Admin from '@/modules/prompt/views/Admin.vue';
import Validation from '@/modules/prompt/views/Validation.vue';
import Users from '@/modules/prompt/views/Users.vue';
import Category from '@/modules/prompt/views/Category.vue';
import Statistic from '@/modules/prompt/views/Statistic.vue';
import Settings from '@/modules/prompt/views/Settings.vue';
import PromptLogin from '@/modules/prompt/views/Login.vue';
import Favoris from '@/modules/prompt/views/Favoris.vue';

import HomeRose from '@/modules/rose/views/HomeRose.vue';
import RoseAbout from '@/modules/rose/views/Apropos.vue';
import RoseChat from '@/modules/rose/views/Chat.vue';
import RoseEvaluation from '@/modules/rose/views/Evaluation.vue';
import RoseRessources from '@/modules/rose/views/Ressourses.vue';

const routes: RouteRecordRaw[] = [


    // wtm
    { path: '/wtm', name: 'wtm', component: Wtm, meta: { layout: 'auth' } },
    { path: '/doha', name: 'doha', component: Doha, meta: { layout: 'auth' } },
    // { path: '/', name: 'ireti', component: IretiHome, meta: { layout: 'auth' } },
    { path: '/ireti', name: 'ireti', component: IretiHome, meta: { layout: 'auth' } },
    // prompt
    { path: '/prompt', name: 'prompt', component: Prompt, meta: { layout: 'auth' } },
    { path: '/prompt/list', name: 'prompt-list', component: PromptList, meta: { layout: 'auth' } },
    { path: '/prompt/detail', name: 'prompt-detail', component: PromptDetail, meta: { layout: 'auth' } },
    { path: '/prompt/create', name: 'prompt-create', component: PromptCreate, meta: { layout: 'auth' } },
    { path: '/prompt/profile', name: 'prompt-profile', component: ProfileView, meta: { layout: 'auth' } },
    { path: '/prompt/leaderboard', name: 'prompt-leaderboard', component: LeaderBoard, meta: { layout: 'auth' } },
    { path: '/prompt/admin', name: 'prompt-admin', component: Admin, meta: { layout: 'auth' } },
    { path: '/prompt/validation', name: 'prompt-validation', component: Validation, meta: { layout: 'auth' } },
    { path: '/prompt/users', name: 'prompt-users', component: Users, meta: { layout: 'auth' } },
    { path: '/prompt/category', name: 'prompt-category', component: Category, meta: { layout: 'auth' } },
    { path: '/prompt/statistic', name: 'prompt-statistic', component: Statistic, meta: { layout: 'auth' } },
    { path: '/prompt/favoris', name: 'prompt-favoris', component: Favoris, meta: { layout: 'auth' } },

    // settings
    { path: '/prompt/settings', name: 'settings', component: Settings, meta: { layout: 'auth' } },
    { path: '/prompt/login', name: 'login', component: PromptLogin, meta: { layout: 'auth' } },

    // rose
    { path: '/', name: 'rose', component: HomeRose, meta: { layout: 'auth' } },
    { path: '/rose/about', name: 'aboutRose', component: RoseAbout, meta: { layout: 'auth' } },
    { path: '/rose/chat', name: 'chat', component: RoseChat, meta: { layout: 'auth' } },
    { path: '/rose/evaluation', name: 'evaluation', component: RoseEvaluation, meta: { layout: 'auth' } },
    { path: '/rose/ressources', name: 'ressources', component: RoseRessources, meta: { layout: 'auth' } },


    // proud
    { path: '/proud', name: 'proud', component: Proud, meta: { layout: 'auth' } },

    // about
    { path: '/about', name: 'about', component: About, meta: { layout: 'auth' } },

    // event
    { path: '/events', name: 'event', component: Event, meta: { layout: 'auth' } },

    // hire
    { path: '/hire', name: 'hire', component: Hire, meta: { layout: 'auth' } },

    // equipe
    { path: '/team', name: 'equipe', component: Equipe, meta: { layout: 'auth' } },

    // contact
    { path: '/contact', name: 'contact', component: Contact, meta: { layout: 'auth' } },

    // patners
    { path: '/patners', name: 'patners', component: Patners, meta: { layout: 'auth' } },

    // galerie
    { path: '/galerie', name: 'galerie', component: Galerie, meta: { layout: 'auth' } },

    // annuaire 
    { path: '/annuaire', name: 'annuaire', component: Annuaire, meta: { layout: 'auth' } },

    // portfolio 
    { path: '/porto', name: 'portfolio', component: Portfolio, meta: { layout: 'auth' } },

    // terminal 
    { path: '/terminal', name: 'terminal', component: Terminal, meta: { layout: 'auth' } },

    // shuri 
    // { path: '/shuri', name: 'shuri', component: Shuri, meta: { layout: 'auth' } },

    // profile 
    { path: '/profile', name: 'profile', component: Profile, meta: { layout: 'auth' } },

    // search 
    { path: '/search', name: 'search', component: Search, meta: { layout: 'auth' } },

    // food 
    { path: '/food', name: 'food', component: Food, meta: { layout: 'auth' } },

    // food detail 
    { path: '/food-detail', name: 'foodDetail', component: FoodDetail, meta: { layout: 'auth' } },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const store = useAppStore();

    if (to?.meta?.layout == 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    next(true);
});
router.afterEach((to, from, next) => {
    appSetting.changeAnimation();
});
export default router;
