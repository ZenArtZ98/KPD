export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const navItems = [
  { label: 'О проекте', href: '#project' },
  { label: 'О фильме', href: '#film' },
  { label: 'Герои', href: '#generations' },
  { label: 'Материалы', href: '#frames' },
  { label: 'Команда', href: '#team' },
  { label: 'Новости', href: '#collective' },
  { label: 'Контакты', href: '#contacts' },
]

export const project = {
  title: 'КПД',
  eyebrow: 'документальный фильм-проект',
  slogan: 'Память живёт в бетоне',
  lead:
    'Документальный фильм о людях, чей дом - не просто адрес, а память, вписанная в бетон и время.',
  note: 'наш дом - не просто стены, это наши истории.',
  body:
    '«КПД» - документальный фильм о районе крупнопанельных домов, созданных в 70-90-х годах в СССР, и о том, как эти места стали домом для разных поколений.',
  bodyMore:
    'Через личные истории жителей, архивные кадры, кинохронику и наблюдения мы исследуем, как архитектура, пространство и события района влияют на нашу повседневную жизнь и память города.',
}

export const film = {
  title: 'О фильме',
  subtitle: 'Режиссёрское видение',
  text: [
    'Мы хотим показать не архитектуру, а людей: их связь - с пространством и друг с другом.',
    'Через призму повседневности мы ищем ответы на важные вопросы: и как же жить - тогда и сейчас.',
  ],
  themes: [
    {
      title: 'Прошлое и настоящее',
      text: 'От строительства домов и первых жителей к сегодняшним героям, их радостям и неразрешенным проблемам.',
      image: asset('assets/decor/5/grid-note.png'),
    },
    {
      title: 'Стабильность и неопределённость',
      text: 'Район как образ стабильности и утраченное чувство постоянности и перемен в пространствах и домах.',
      image: asset('assets/images/window.jpg'),
    },
    {
      title: 'Коллективное и личное',
      text: 'Общая среда: строительство, кварталы и приветность. Каждый дом - частная история, вплетённая в общую ткань района.',
      image: asset('assets/images/window.jpg'),
    },
  ],
}

export const generations = {
  title: 'Два поколения - одно место памяти',
  intro:
    'Мы рассказываем истории тех, кто строил эти районы, тех, кто в них вырос, и тех, кто выбирает жить здесь - продолжая память и имя дома.',
  people: [
    {
      title: 'Те, кто строил',
      text: 'Их руки построили дома, их мечты - будущее. Они рассказывают, каким был район тогда.',
      image: asset('assets/images/stroitel.jpg'),
    },
    {
      title: 'Те, кто вырос',
      text: 'Они живут здесь сейчас, работают, растят детей - и отпечаток на этом месте.',
      image: asset('assets/images/girl-walking.jpg'),
    },
  ],
}

export const frames = {
  title: 'Кадры из будущего фильма',
  subtitle: 'Реальные места, реальные люди в реальном районе',
  images: [
    asset('assets/images/window.jpg'),
    asset('assets/images/address-wall.jpg'),
    asset('assets/images/girl-walking.jpg'),
    asset('assets/images/yard.jpg'),
    asset('assets/images/mosaic.jpg'),
  ],
}

export const collective = {
  title: 'Из фильма - в творческое объединение',
  cardTitle: 'КПД',
  cardText: 'Творческое объединение',
  text:
    '«КПД» - это не только фильм, но и сообщество, продвигающее истории. Мы создаём проекты и события о районах и людях, приглашая к участию всех, кто хочет сохранить, передать и взглянуть на своё пространство по-новому.',
  directions: [
    'Документальное кино',
    'Городские исследования',
    'Мастерские и лекции',
    'Сообщество и диалог',
  ],
}

export const team = [
  { role: 'Режиссёр', name: 'Полина Орлова' },
  { role: 'Оператор', name: 'Илья Соколов' },
  { role: 'Продюсер', name: 'Мария Лебедева' },
  { role: 'Звукорежиссёр', name: 'Артём Кузнецов' },
]

export const productionTeam = [
  { role: 'Режиссер, Сценарист', name: 'Цыганкова Ангелина' },
  { role: 'Второй режиссер, Оператор', name: 'Панфилов Сергей' },
  { role: 'Монтажер', name: 'Шагивалеева Александра' },
  { role: 'Продюсер', name: 'Булаева Юлия' },
  { role: 'Звукорежиссер', name: 'Маландий Даниил' },
]

export const contacts = {
  title: 'Контакты',
  text: 'Мы открыты к сотрудничеству и вашим историям.',
  links: [
    { label: 'info@kpd-film.ru', href: 'mailto:info@kpd-film.ru' },
    { label: 'kpd_film', href: 'https://t.me/kpd_film' },
    { label: 'kpd.film', href: 'https://vk.com/kpd_film' },
  ],
  letter: 'Твоя история о доме может войти в архив фильма. И вместе сохранит её.',
}

export const pixelDirectorLinks = [
  { label: 'Telegram', href: 'https://t.me/kpd_film' },
  { label: 'VK', href: 'https://vk.com/kpd_film' },
  { label: 'YouTube', href: 'https://youtube.com/@kpd_film' },
  { label: 'Email', href: 'mailto:info@kpd-film.ru' },
]
