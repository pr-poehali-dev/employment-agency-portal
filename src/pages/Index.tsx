import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const stats = [
    { label: 'Трудоустроено', value: '2,450+', icon: 'Users' },
    { label: 'Активных вакансий', value: '387', icon: 'Briefcase' },
    { label: 'Партнёров', value: '156', icon: 'Building2' },
    { label: 'Успешность', value: '94%', icon: 'TrendingUp' },
  ];

  const vacancies = [
    {
      id: 1,
      title: 'Frontend разработчик',
      company: 'TechCorp',
      salary: '150 000 - 200 000 ₽',
      location: 'Москва',
      type: 'Полная занятость',
      category: 'it',
    },
    {
      id: 2,
      title: 'Менеджер по продажам',
      company: 'SalesHub',
      salary: '80 000 - 120 000 ₽',
      location: 'Санкт-Петербург',
      type: 'Полная занятость',
      category: 'sales',
    },
    {
      id: 3,
      title: 'HR специалист',
      company: 'People First',
      salary: '70 000 - 90 000 ₽',
      location: 'Удаленно',
      type: 'Удаленная работа',
      category: 'hr',
    },
    {
      id: 4,
      title: 'Backend разработчик',
      company: 'DataFlow',
      salary: '180 000 - 250 000 ₽',
      location: 'Москва',
      type: 'Полная занятость',
      category: 'it',
    },
    {
      id: 5,
      title: 'Бухгалтер',
      company: 'FinanceGroup',
      salary: '60 000 - 85 000 ₽',
      location: 'Казань',
      type: 'Полная занятость',
      category: 'finance',
    },
    {
      id: 6,
      title: 'Маркетолог',
      company: 'BrandBoost',
      salary: '90 000 - 130 000 ₽',
      location: 'Москва',
      type: 'Гибрид',
      category: 'marketing',
    },
  ];

  const services = [
    {
      icon: 'UserSearch',
      title: 'Для соискателей',
      description: 'Помощь в поиске работы, составление резюме, карьерное консультирование',
      link: '#seekers',
    },
    {
      icon: 'Building2',
      title: 'Для работодателей',
      description: 'Подбор персонала, размещение вакансий, автоматизированный отбор кандидатов',
      link: '#employers',
    },
    {
      icon: 'BarChart3',
      title: 'Статистика',
      description: 'Аналитика рынка труда, отчётность, мониторинг трудоустройства',
      link: '#statistics',
    },
  ];

  const filteredVacancies =
    selectedCategory === 'all'
      ? vacancies
      : vacancies.filter((v) => v.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Rocket" size={28} className="text-primary" />
              <span className="text-2xl font-bold text-primary">КадроПоехали</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#vacancies" className="text-sm font-medium hover:text-primary transition-colors">
                Вакансии
              </a>
              <a href="#seekers" className="text-sm font-medium hover:text-primary transition-colors">
                Соискателям
              </a>
              <a href="#employers" className="text-sm font-medium hover:text-primary transition-colors">
                Работодателям
              </a>
              <a href="#statistics" className="text-sm font-medium hover:text-primary transition-colors">
                Статистика
              </a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button size="sm" className="hidden md:inline-flex">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="pt-32 pb-20 px-4"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #dbeafe 100%)',
        }}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Ваш путь к успешной карьере
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Соединяем талантливых специалистов с ведущими работодателями. Помогаем найти
                идеальную работу и закрыть вакансии быстро и эффективно.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти работу
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Briefcase" size={20} className="mr-2" />
                  Разместить вакансию
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/ab300879-b2ce-4762-90b1-a27293b4b26e/files/91ed1995-1bae-459d-a875-a231656736f8.jpg"
                alt="Professional recruitment"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-muted/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon name={stat.icon} size={36} className="mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">О нас</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            КадроПоехали — ведущее кадровое агентство, специализирующееся на трудоустройстве
            безработных граждан и подборе персонала для предприятий. Мы используем современные
            технологии классификации данных и автоматизированного подбора, что позволяет нам
            достигать высокой эффективности трудоустройства — 94% успешных размещений.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы работаем с более чем 156 компаниями-партнёрами, предоставляем полную отчётность в
            налоговые органы и органы государственной статистики, соблюдая все требования
            законодательства.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Актуальные вакансии</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <Input placeholder="Поиск вакансий..." className="flex-1" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="sales">Продажи</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="finance">Финансы</SelectItem>
                <SelectItem value="marketing">Маркетинг</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVacancies.map((vacancy) => (
              <Card key={vacancy.id} className="hover:shadow-lg transition-all group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {vacancy.title}
                    </CardTitle>
                    <Badge variant="secondary">{vacancy.type}</Badge>
                  </div>
                  <CardDescription className="text-base font-medium text-foreground">
                    {vacancy.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Banknote" size={16} />
                      <span className="font-semibold text-accent">{vacancy.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={16} />
                      <span>{vacancy.location}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Откликнуться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="seekers" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Для соискателей</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы помогаем найти работу мечты и развить карьеру. Наши услуги включают:
              </p>
              <ul className="space-y-4">
                {[
                  'Профессиональная помощь в составлении резюме',
                  'Подбор вакансий на основе ваших навыков и опыта',
                  'Карьерное консультирование и планирование',
                  'Подготовка к собеседованиям',
                  'Сопровождение на всех этапах трудоустройства',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Зарегистрироваться
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Загрузите резюме</h3>
              <p className="text-muted-foreground mb-6">
                Наша система автоматически проанализирует ваши навыки и подберёт подходящие
                вакансии
              </p>
              <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <Icon name="Upload" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground">
                  Нажмите или перетащите файл сюда
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="employers" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Разместите вакансию</CardTitle>
                  <CardDescription className="text-base">
                    Заполните форму, и мы начнём подбор кандидатов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Название вакансии" />
                  <Input placeholder="Компания" />
                  <Input placeholder="Зарплата" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="msk">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="remote">Удаленно</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">Для работодателей</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Закрывайте вакансии быстро с помощью нашей автоматизированной системы подбора:
              </p>
              <ul className="space-y-4">
                {[
                  'Автоматический подбор кандидатов по вашим критериям',
                  'База из тысяч проверенных специалистов',
                  'Быстрое размещение вакансий',
                  'Аналитика эффективности вакансий',
                  'Полное сопровождение процесса найма',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="statistics" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Статистика и отчётность
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                  Трудоустройство по месяцам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { month: 'Январь', value: 184 },
                    { month: 'Февраль', value: 216 },
                    { month: 'Март', value: 245 },
                    { month: 'Апрель', value: 198 },
                  ].map((item) => (
                    <div key={item.month}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.month}</span>
                        <span className="font-semibold">{item.value} чел.</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${(item.value / 250) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PieChart" size={24} className="text-primary" />
                  Популярные категории
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { category: 'IT и разработка', percent: 35 },
                    { category: 'Продажи', percent: 22 },
                    { category: 'Производство', percent: 18 },
                    { category: 'Финансы', percent: 15 },
                    { category: 'Другое', percent: 10 },
                  ].map((item) => (
                    <div key={item.category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.category}</span>
                        <span className="font-semibold">{item.percent}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary to-accent text-white border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="FileText" size={24} />
                Отчётность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-4">
                Мы предоставляем полную отчётность в налоговые органы и органы государственной
                статистики, гарантируя прозрачность и соответствие законодательству.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" size="sm">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать отчёт
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@kadropoehali.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Телефон" type="tel" />
                <Button className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Rocket" size={24} />
                <span className="text-xl font-bold">КадроПоехали</span>
              </div>
              <p className="text-white/80 text-sm">
                Ведущее кадровое агентство по трудоустройству
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#seekers" className="hover:text-white transition-colors">
                    Для соискателей
                  </a>
                </li>
                <li>
                  <a href="#employers" className="hover:text-white transition-colors">
                    Для работодателей
                  </a>
                </li>
                <li>
                  <a href="#statistics" className="hover:text-white transition-colors">
                    Статистика
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#vacancies" className="hover:text-white transition-colors">
                    Вакансии
                  </a>
                </li>
                <li>
                  <a href="#contacts" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon name="Twitter" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 КадроПоехали. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
