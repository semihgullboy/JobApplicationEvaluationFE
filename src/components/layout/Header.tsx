import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Building2, Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b shadow-sm">
            <div className="mx-auto max-w-7xl px-4 py-3">
                {/* Desktop Header */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2 flex-1">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                                <Building2 className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">JobApplicationEvaluation</span>
                        </Link>
                    </div>

                    <nav className="flex items-center gap-3 text-xs font-medium text-gray-700">
                        <Link
                            to="/"
                            className="relative px-1 py-0.5 transition-colors hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            Anasayfa
                        </Link>
                        <Link
                            to="/companies"
                            className="relative px-1 py-0.5 transition-colors hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            Şirketler
                        </Link>
                        <Link
                            to="/about"
                            className="relative px-1 py-0.5 transition-colors hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            Hakkımızda
                        </Link>
                        <Link
                            to="/contact"
                            className="relative px-1 py-0.5 transition-colors hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            İletişim
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2 flex-1 justify-end">
                        <Link to="/login">
                            <Button variant="outline" size="sm" className="h-7 px-3 text-[11px]">Giriş Yap</Button>
                        </Link>
                        <Link to="/login">
                            <Button size="sm" className="h-7 px-3 text-[11px] bg-blue-600 text-white hover:bg-blue-700">Kayıt Ol</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                                <Building2 className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">JobApplicationEvaluation</span>
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-700 hover:text-blue-600"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="mt-4 pb-4 border-t pt-4 space-y-3">
                            <Link
                                to="/"
                                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Anasayfa
                            </Link>
                            <Link
                                to="/companies"
                                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Şirketler
                            </Link>
                            <Link
                                to="/about"
                                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Hakkımızda
                            </Link>
                            <Link
                                to="/contact"
                                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                İletişim
                            </Link>
                            <div className="flex flex-col gap-2 pt-3">
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="outline" size="sm" className="w-full">Giriş Yap</Button>
                                </Link>
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button size="sm" className="w-full bg-blue-600 text-white hover:bg-blue-700">Kayıt Ol</Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
