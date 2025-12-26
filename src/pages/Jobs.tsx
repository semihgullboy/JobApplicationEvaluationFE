import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const mockCompanies = [
    { id: 1, name: "Tech Corp", sector: "Teknoloji", city: "İstanbul", avgScore: 4.5, responseTime: "Düşük", reviewCount: 127 },
    { id: 2, name: "Finance Group", sector: "Finans", city: "Ankara", avgScore: 4.2, responseTime: "Orta", reviewCount: 85 },
    { id: 3, name: "Health Plus", sector: "Sağlık", city: "İzmir", avgScore: 4.8, responseTime: "Düşük", reviewCount: 203 },
    { id: 4, name: "Edu Systems", sector: "Eğitim", city: "İstanbul", avgScore: 4.0, responseTime: "Orta", reviewCount: 64 },
    { id: 5, name: "Retail Star", sector: "Perakende", city: "Bursa", avgScore: 3.8, responseTime: "Orta", reviewCount: 92 },
    { id: 6, name: "Auto Tech", sector: "Otomotiv", city: "Ankara", avgScore: 4.3, responseTime: "Orta", reviewCount: 118 },
    { id: 7, name: "Media Hub", sector: "Medya", city: "İstanbul", avgScore: 4.1, responseTime: "Orta", reviewCount: 73 },
    { id: 8, name: "Food Co", sector: "Gıda", city: "İzmir", avgScore: 3.9, responseTime: "Yüksek", reviewCount: 56 },
    { id: 9, name: "Travel Agency", sector: "Turizm", city: "Antalya", avgScore: 4.4, responseTime: "Düşük", reviewCount: 141 },
    { id: 10, name: "Design Studio", sector: "Tasarım", city: "İstanbul", avgScore: 4.6, responseTime: "Düşük", reviewCount: 156 },
    { id: 11, name: "Energy Corp", sector: "Enerji", city: "Ankara", avgScore: 4.3, responseTime: "Orta", reviewCount: 98 },
    { id: 12, name: "Digital Arts", sector: "Sanat", city: "İstanbul", avgScore: 4.7, responseTime: "Düşük", reviewCount: 189 },
];

const avatarColors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-cyan-500", "bg-orange-500", "bg-teal-500", "bg-violet-500", "bg-rose-500"];

const sectors = ["Tümü", "Teknoloji", "Finans", "Sağlık", "Eğitim", "Perakende", "Otomotiv", "Medya", "Gıda", "Turizm", "Enerji", "İnşaat", "Lojistik"];

const Jobs = () => {
    return (
        <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
            <div className="flex gap-6 items-start">
                <div className="w-64 shrink-0">
                    <Card className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                <h3 className="text-lg font-semibold text-gray-900">Filtrele</h3>
                            </div>
                            <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                                Temizle
                            </span>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 block mb-2">Şirket Ara</label>
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <Input
                                    type="text"
                                    placeholder="Şirket ara..."
                                    className="w-full pl-10"
                                />
                            </div>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 block mb-2">Sektör:</label>
                            <select
                                defaultValue="Tümü"
                                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white hover:border-gray-400 transition-colors cursor-pointer"
                            >
                                {sectors.map((sector) => (
                                    <option key={sector} value={sector}>{sector}</option>
                                ))}
                            </select>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Ortalama Puan:
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                step="0.1"
                                defaultValue="0"
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>0</span>
                                <span>5</span>
                            </div>
                        </div>
                        <hr className="border-gray-200" />

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Başvuru Dönüş Süresi</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="responseTime" value="Tümü" defaultChecked className="w-4 h-4" />
                                    <span className="text-sm">Tümü</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="responseTime" value="Düşük" className="w-4 h-4 text-green-600" />
                                    <span className="text-sm text-green-600">Düşük</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="responseTime" value="Orta" className="w-4 h-4 text-yellow-600" />
                                    <span className="text-sm text-yellow-600">Orta</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="responseTime" value="Yüksek" className="w-4 h-4 text-red-600" />
                                    <span className="text-sm text-red-600">Yüksek</span>
                                </label>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-900">{mockCompanies.length}</span> tane ilan bulundu
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Sırala:</span>
                            <select className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer bg-white hover:border-gray-400 transition-colors">
                                <option value="name">İsme Göre</option>
                                <option value="score">Puana Göre</option>
                                <option value="response">Dönüş Süresine Göre</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {mockCompanies.map((company) => (
                            <Card key={company.id} className="p-5 hover:shadow-lg transition-shadow flex flex-col h-full">
                                <div className="mb-4 flex gap-3">
                                    <div className={`${avatarColors[company.id % avatarColors.length]} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <span className="text-white font-bold text-lg">
                                            {company.name.split(' ').map(word => word[0]).join('')}
                                        </span>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <h4 className="text-sm font-semibold text-gray-900">{company.name}</h4>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                                                {company.sector}
                                            </span>
                                            <span className="inline-block px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded">
                                                {company.city}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-xs mb-4 flex-nowrap">
                                    <span className="text-yellow-600 font-semibold">⭐ {company.avgScore}</span>
                                    <span className="text-gray-400">|</span>
                                    <span className="text-gray-600 truncate">{company.reviewCount} değerlendirme</span>
                                    <span className="text-gray-400">|</span>
                                    <span className={`font-medium whitespace-nowrap ${company.responseTime === "Düşük" ? "text-green-600" :
                                            company.responseTime === "Orta" ? "text-yellow-600" :
                                                "text-red-600"
                                        }`}>
                                        {company.responseTime} dönüş
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <hr className="border-gray-200 mb-3" />

                                    <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium text-xs py-1.5 hover:bg-blue-50 rounded transition-colors">
                                        Detayları Gör
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-2 pt-4">
                        <Button variant="outline" size="sm">
                            &lt;
                        </Button>
                        <div className="flex gap-1">
                            <Button size="sm" className="min-w-10 bg-blue-600 text-white hover:bg-blue-700">
                                1
                            </Button>
                            <Button variant="outline" size="sm" className="min-w-10">
                                2
                            </Button>
                        </div>
                        <Button variant="outline" size="sm">
                            &gt;
                        </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                        Toplam {mockCompanies.length} şirket bulundu
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;