export { default as BarChart } from '../../components/BarChart.js'
export { default as AccountStatus } from '../../components/dashboard/AccountStatus.vue'
export { default as ApiModal } from '../../components/dashboard/ApiModal.vue'
export { default as CustomMenu } from '../../components/dashboard/CustomMenu.vue'
export { default as DashMenu } from '../../components/dashboard/DashMenu.vue'
export { default as WelcomeBox } from '../../components/dashboard/WelcomeBox.vue'
export { default as NewsList } from '../../components/news/NewsList.vue'
export { default as SearchAside } from '../../components/news/SearchAside.vue'
export { default as BlogWrapper } from '../../components/home/BlogWrapper.vue'
export { default as CoinsWrapper } from '../../components/home/CoinsWrapper.vue'
export { default as FeaturesWrapper } from '../../components/home/FeaturesWrapper.vue'
export { default as IntroWrapper } from '../../components/home/IntroWrapper.vue'
export { default as StartTrading } from '../../components/home/StartTrading.vue'
export { default as StatusWrapper } from '../../components/home/StatusWrapper.vue'
export { default as StepsWrapper } from '../../components/home/StepsWrapper.vue'
export { default as Breadcrumb } from '../../components/shared/Breadcrumb.vue'
export { default as Footer } from '../../components/shared/Footer.vue'
export { default as Header } from '../../components/shared/Header.vue'
export { default as Login } from '../../components/shared/Login.vue'
export { default as Menu } from '../../components/shared/Menu.vue'
export { default as Register } from '../../components/shared/Register.vue'

export const LazyBarChart = import('../../components/BarChart.js' /* webpackChunkName: "components/bar-chart" */).then(c => c.default || c)
export const LazyAccountStatus = import('../../components/dashboard/AccountStatus.vue' /* webpackChunkName: "components/account-status" */).then(c => c.default || c)
export const LazyApiModal = import('../../components/dashboard/ApiModal.vue' /* webpackChunkName: "components/api-modal" */).then(c => c.default || c)
export const LazyCustomMenu = import('../../components/dashboard/CustomMenu.vue' /* webpackChunkName: "components/custom-menu" */).then(c => c.default || c)
export const LazyDashMenu = import('../../components/dashboard/DashMenu.vue' /* webpackChunkName: "components/dash-menu" */).then(c => c.default || c)
export const LazyWelcomeBox = import('../../components/dashboard/WelcomeBox.vue' /* webpackChunkName: "components/welcome-box" */).then(c => c.default || c)
export const LazyNewsList = import('../../components/news/NewsList.vue' /* webpackChunkName: "components/news-list" */).then(c => c.default || c)
export const LazySearchAside = import('../../components/news/SearchAside.vue' /* webpackChunkName: "components/search-aside" */).then(c => c.default || c)
export const LazyBlogWrapper = import('../../components/home/BlogWrapper.vue' /* webpackChunkName: "components/blog-wrapper" */).then(c => c.default || c)
export const LazyCoinsWrapper = import('../../components/home/CoinsWrapper.vue' /* webpackChunkName: "components/coins-wrapper" */).then(c => c.default || c)
export const LazyFeaturesWrapper = import('../../components/home/FeaturesWrapper.vue' /* webpackChunkName: "components/features-wrapper" */).then(c => c.default || c)
export const LazyIntroWrapper = import('../../components/home/IntroWrapper.vue' /* webpackChunkName: "components/intro-wrapper" */).then(c => c.default || c)
export const LazyStartTrading = import('../../components/home/StartTrading.vue' /* webpackChunkName: "components/start-trading" */).then(c => c.default || c)
export const LazyStatusWrapper = import('../../components/home/StatusWrapper.vue' /* webpackChunkName: "components/status-wrapper" */).then(c => c.default || c)
export const LazyStepsWrapper = import('../../components/home/StepsWrapper.vue' /* webpackChunkName: "components/steps-wrapper" */).then(c => c.default || c)
export const LazyBreadcrumb = import('../../components/shared/Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => c.default || c)
export const LazyFooter = import('../../components/shared/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/shared/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLogin = import('../../components/shared/Login.vue' /* webpackChunkName: "components/login" */).then(c => c.default || c)
export const LazyMenu = import('../../components/shared/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => c.default || c)
export const LazyRegister = import('../../components/shared/Register.vue' /* webpackChunkName: "components/register" */).then(c => c.default || c)
