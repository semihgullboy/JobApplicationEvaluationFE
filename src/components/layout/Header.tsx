import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Building2 } from 'lucide-react'

export function Header() {
    return (
        <header className="bg-white border-b shadow-sm">
            <div className="mx-auto max-w-7xl px-3 py-2 flex items-center gap-4">
                <div className="flex items-center gap-2 flex-1 min-w-0 pl-10">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                            <Building2 className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">JobApplicationEvaluation</span>
                    </Link>
                </div>

                <nav className="flex items-center gap-3 text-xs font-medium text-gray-700 justify-center">
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

                <div className="flex items-center gap-2 flex-1 justify-end pr-10">
                    <Link to="/login">
                        <Button variant="outline" size="sm" className="h-7 px-3 text-[11px]">Giriş Yap</Button>
                    </Link>
                    <Link to="/login">
                        <Button size="sm" className="h-7 px-3 text-[11px] bg-blue-600 text-white hover:bg-blue-700">Kayıt Ol</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
