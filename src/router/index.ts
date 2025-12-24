import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

import HomeView from '../views/index.vue';

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
import AgentHome from '@/modules/agent/views/Dashboard.vue';
import AgentCatalogue from '@/modules/agent/views/Catalogue.vue';
import AgentChat from '@/modules/agent/views/Chatbot.vue';
import Doha from '@/modules/agent/views/Doha.vue';
import HomeGdg from '@/modules/gdg/Home.vue';

import Assurance from '@/modules/assurance/Home.vue';
const routes: RouteRecordRaw[] = [



    // prompt
    { path: '/prompt', name: 'prompt', component: Prompt, meta: { layout: 'auth' } },
    { path: '/prompt/list', name: 'prompt-list', component: PromptList, meta: { layout: 'auth' } },
    { path: '/prompt/detail/:id', name: 'prompt-detail', component: PromptDetail, meta: { layout: 'auth' } },
    { path: '/prompt/create', name: 'prompt-create', component: PromptCreate, meta: { layout: 'auth' } },
    { path: '/prompt/profile', name: 'prompt-profile', component: ProfileView, meta: { layout: 'auth' } },
    { path: '/prompt/leaderboard', name: 'prompt-leaderboard', component: LeaderBoard, meta: { layout: 'auth' } },
    { path: '/prompt/admin', name: 'admin', component: Admin, meta: { layout: 'auth' } },
    { path: '/prompt/validation', name: 'validation', component: Validation, meta: { layout: 'auth' } },
    { path: '/prompt/users', name: 'users', component: Users, meta: { layout: 'auth' } },
    { path: '/prompt/category', name: 'categories', component: Category, meta: { layout: 'auth' } },
    { path: '/prompt/statistic', name: 'stats', component: Statistic, meta: { layout: 'auth' } },
    { path: '/prompt/favoris', name: 'favoris', component: Favoris, meta: { layout: 'auth' } },

    // settings
    { path: '/prompt/settings', name: 'settings', component: Settings, meta: { layout: 'auth' } },
    { path: '/prompt/login', name: 'login', component: PromptLogin, meta: { layout: 'auth' } },

    // rose
    { path: '/rose', name: 'rose', component: HomeRose, meta: { layout: 'auth' } },
    { path: '/rose/about', name: 'aboutRose', component: RoseAbout, meta: { layout: 'auth' } },
    { path: '/rose/chat', name: 'chat', component: RoseChat, meta: { layout: 'auth' } },
    { path: '/rose/evaluation', name: 'evaluation', component: RoseEvaluation, meta: { layout: 'auth' } },
    { path: '/rose/ressources', name: 'ressources', component: RoseRessources, meta: { layout: 'auth' } },

    // assurance
    { path: '/', name: 'assurance', component: Assurance, meta: { layout: 'auth' } },

    // agent
    { path: '/agent', name: 'agent', component: AgentHome, meta: { layout: 'auth' } },
    { path: '/agent/catalogue', name: 'agent-catalogue', component: AgentCatalogue, meta: { layout: 'auth' } },
    { path: '/agent/chat', name: 'agent-chat', component: AgentChat, meta: { layout: 'auth' } },
    { path: '/doha', name: 'doha', component: Doha, meta: { layout: 'auth' } },

    // gdg
    { path: '/gdg', name: 'gdg', component: HomeGdg, meta: { layout: 'auth' } },

 

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
