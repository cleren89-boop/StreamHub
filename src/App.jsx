import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApiKeyProvider } from './context/ApiKeyContext.jsx'
import { MyListProvider } from './context/MyListContext.jsx'
import { HistoryProvider } from './context/HistoryContext.jsx'
import { RatingsProvider } from './context/RatingsContext.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'
import { ProviderProvider } from './context/ProviderContext.jsx'
import { PreferencesProvider } from './context/PreferencesContext.jsx'
import PublicLayout from './components/PublicLayout.jsx'
import VideoModal from './components/VideoModal.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import MyListPage from './pages/MyListPage.jsx'
import HistoryPage from './pages/HistoryPage.jsx'
import GenrePage from './pages/GenrePage.jsx'
import MoviesPage from './pages/MoviesPage.jsx'
import SeriesPage from './pages/SeriesPage.jsx'
import WatchPage from './pages/WatchPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import WatchPartyPage from './pages/WatchPartyPage.jsx'
import WatchPartyRoom from './pages/WatchPartyRoom.jsx'
import AdminLayout from './pages/admin/AdminLayout.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminSection from './pages/admin/AdminSection.jsx'
import { ADMIN_SECTION_ROUTES } from './pages/admin/adminSections.js'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ApiKeyProvider>
        <PreferencesProvider>
        <MyListProvider>
          <HistoryProvider>
          <RatingsProvider>
          <ProviderProvider>
          <PlayerProvider>
            <ScrollToTop />
            <Routes>
              <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/series" element={<SeriesPage />} />
                <Route path="/watch/:type/:id" element={<WatchPage />} />
                <Route path="/party" element={<WatchPartyPage />} />
                <Route path="/party/:code" element={<WatchPartyRoom />} />
                <Route path="/mylist" element={<MyListPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/genre/:id" element={<GenrePage />} />
                <Route path="*" element={<HomePage />} />
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                {ADMIN_SECTION_ROUTES.map((section) => (
                  <Route
                    key={section.key}
                    path={section.path}
                    element={<AdminSection sectionKey={section.key} />}
                  />
                ))}
              </Route>
            </Routes>
            <VideoModal />
          </PlayerProvider>
          </ProviderProvider>
          </RatingsProvider>
          </HistoryProvider>
        </MyListProvider>
        </PreferencesProvider>
      </ApiKeyProvider>
    </BrowserRouter>
  )
}
