import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, Building2, Star, Clock } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"

const Home = () => {
    return (
        <div className="-m-12">
            <section className="text-center space-y-6 bg-linear-to-br from-blue-50 to-white py-16 px-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Türkiye'deki Mülakat
                    <div className="text-blue-600">Deneyimlerini Keşfet</div>
                </h1>

                <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Adayların Türkiye'de girdikleri mülakatlarda yaşadıkları deneyimleri, paylaştıkları ipuçlarını ve şirketlere dair içgörüleri tek yerde toplayıp aramanı sağlıyoruz. Şirket kültürü, süreç uzunluğu ve soru tiplerine kadar pek çok detayı topluluk katkısıyla keşfet.
                </p>

                <div className="mx-auto max-w-2xl space-y-3">
                    <div className="relative flex items-center">
                        <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="Şirket adı ara..."
                            className="h-12 text-base rounded-full shadow-sm pl-12 pr-24 bg-white"
                        />
                        <Button
                            size="sm"
                            className="absolute right-1 h-10 px-6 bg-blue-600 text-white hover:bg-blue-700 shadow-sm rounded-full"
                        >
                            Ara
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500">
                        Popüler Aramalar: Trendyol, Getir, THY, Aselsan
                    </p>
                </div>
            </section>

            <section className="px-12 py-8 bg-white">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan Şirketler</h2>
                        <p className="text-sm text-gray-600 mt-1">Adaylar tarafından en çok puanlanan şirketler</p>
                    </div>
                    <Link to="/companies" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Bütün Şirketleri Gör
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: 'Trendyol', rating: 4.5 },
                        { name: 'Getir', rating: 4.3 },
                        { name: 'THY', rating: 4.7 },
                        { name: 'Aselsan', rating: 4.6 },
                    ].map((company) => (
                        <Card key={company.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardContent className="flex flex-col items-center p-4 space-y-3">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Building2 className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-sm text-center">{company.name}</h3>
                                    <div className="inline-flex items-center gap-0.5 bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">
                                        <span className="text-yellow-500">★</span>
                                        <span className="font-medium">{company.rating}</span>
                                    </div>
                                </div>
                                <Button size="sm" variant="outline" className="w-full">
                                    İncele
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="px-12 py-8 bg-linear-to-br from-blue-50 to-white">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Son Eklenen Değerlendirmeler</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { user: 'Semih K.', initial: 'S', company: 'Trendyol', position: 'Frontend Developer', rating: 4, date: '2 gün önce', review: 'Çok profesyonel bir mülakat süreciydi. Teknik sorular oldukça kaliteliydi ve ekip çok samimiydi.' },
                        { user: 'Ayşe M.', initial: 'A', company: 'Getir', position: 'Backend Developer', rating: 5, date: '3 gün önce', review: 'İlk turda HR, ikinci turda teknik mülakat vardı. Süreç yaklaşık 2 hafta sürdü ve her aşamada çok iyi geri dönüş aldım.' },
                    ].map((item, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardContent className="p-5 space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                                            <span className="text-white font-semibold text-lg">{item.initial}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm">{item.position}</h3>
                                            <p className="text-xs text-gray-500">{item.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`h-4 w-4 ${star <= item.rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed italic">"{item.review}"</p>
                                <div className="flex items-center justify-end pt-2 border-t border-gray-100">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3 text-gray-400" />
                                        <span className="text-xs text-gray-500">{item.date}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium   px-6 py-4">
                        Daha Fazla Değerlendirme Gör
                    </Button>
                </div>
            </section>

            <section className="px-12 py-16 bg-blue-600 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Deneyimlerinizi Paylaşın, Topluluğa Katkı Sağlayın
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                    Mülakat deneyimlerinizi paylaşarak iş arayan adaylara yol gösterin ve topluluğumuzun bir parçası olun. İlk adımı bugün atın!
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-base">
                    Hemen Üye Ol ve Değerlendirme Yap
                </Button>
            </section>
        </div>
    )
}

export default Home
