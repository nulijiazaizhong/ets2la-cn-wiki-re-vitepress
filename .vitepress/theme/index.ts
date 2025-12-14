import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'
import AgreementModal from './components/AgreementModal.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: any }) {
    app.component('AgreementModal', AgreementModal)
  }
}
