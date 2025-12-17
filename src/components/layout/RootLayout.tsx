import { Outlet } from '@tanstack/react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 bg-gray-100">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    )
}
