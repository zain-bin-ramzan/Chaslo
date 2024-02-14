import LandingPage from "../pages/LandingPage/LandingPage";
import OverviewPage from "../pages/OverviewPage/OverviewPage";
import PaymentsPage from '../pages/PaymentPage/PaymentPage'
import TransactionsPage from "../pages/TransactionsPage/TransactionsPage";
import AccountsPage from "../pages/AccountsPage/AccountsPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import HelpPage from "../pages/HelpPage/HelpPage";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export {
    LandingPage,
    OverviewPage,
    PaymentsPage,
    TransactionsPage,
    AccountsPage,
    SettingsPage,
    HelpPage
}