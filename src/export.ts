import { modalAnimationType } from './model'
import { keys } from './store/q-store'

export { axiosInstance } from './service/instance'

export const tokenStorageKey = 'token-storage'
export const invalidTokenMessage = 'invalid token!'

export const qpk: { [key in keys]: keys } = {
    contentprofile: 'contentprofile',
    viewimg: 'viewimg',
    contentsession: 'contentsession',
    pushcharacter: 'pushcharacter',
    actionentity: 'actionentity',
    anchorlink: "anchorlink",
    search: 'search',
    forceupadeteuser: 'forceupadeteuser',
    date: 'date',
    grid: 'grid',
    tags: 'tags',
    select: 'select',
    token: 'token',
}

export const tagsArray = [
    'dnd',
    'wtfit',
    'web'
]

export const contentLoaderProps = {
    backgroundColor: "#0c0c0c",
    foregroundColor: "#0e0e0e",
    speed: 2
}

export const developers = 'wtfit & Snake Eyes Teams'

export const modalAnimationEnum: {
    [key in 'modal-right' | 'modal-dft' | 'modal-bottom']: modalAnimationType
} = {
    'modal-right': {
        close: "right-modal-close",
        open: 'right-modal-open'
    },
    'modal-dft': {
        close: 'modal-close',
        open: 'modal-open'
    },
    'modal-bottom': {
        close: "modal-close-bottom",
        open: 'modal-open-bottom'
    }
}

export const REJECT_SERVER = 'Ошибка со стороны сервера!'
export const dftSource = { id: 1, name: 'Кастомный' }

export const nameProject = 'Reborn Phoenix'
export const slogan = 'Играйте вместе с нами!'

export const title = {
    communityRules: 'Правила сообщества',
    authorization: 'Авторизация',
    p404: 'Страница 404',
    changePassword: 'Изменение пароля',
    communty: 'Сообщество',
    subscribers: 'Подписчики',
    createPost: 'Конструктор статьи',
    editProfile: 'Редактор профиля',
    forum: 'Форум',
    main: 'Главная',
    profile: 'Профиль',
    reserPassword: 'Востановление аккаунта',
    faq: 'Часто задаваемые вопросы',
}

export const sourses = {
    map: [
        { value: '0', title: 'Все' },
        { value: '2', title: 'Карты' },
    ],
    entity: [
        { value: '0', title: 'Все' },
        { value: '3', title: 'Люди' },
        { value: '4', title: 'Звери' },
        { value: '5', title: 'Фентези сущеста' }
    ],
    object: [
        { value: '0', title: 'Все' },
        { value: '6', title: 'Сооружения' },
    ]
}

export const tip = [
    'Общайтесь с командой — хорошая коммуникация важна для успеха.',
    'Знайте свою роль — используйте сильные стороны вашего персонажа.',
    'Планируйте заранее — думайте о тактике и возможных сценариях.',
    'Не бойтесь экспериментировать — иногда неожиданные идеи работают лучше.',
    'Следите за ресурсами — здоровье, заклятия, снаряжение.',
    'Внимательно слушайте ведущего — он расскажет важные детали и подсказки.',
    'Развивайте персонажа — выбирайте навыки и черты, которые дополняют команду.',
    'Не злоупотребляйте магией и мощными способностями — оставляйте их на важные моменты.',
    'Получайте удовольствие — игра создается для развлечения.',
    'Будьте терпеливы и уважайте других — командная игра важнее победы.',
    slogan,
]

export const noFindDataIcon = [
    '/icon/no-find-data-1.svg',
    '/icon/no-find-data-2.svg',
    '/icon/no-find-data-3.svg',
]

export const separator = ':separator:'
export const separatorLink = ':separator-link:'

export const serverWork = 'ok'

export const customMarkup = {
    h1: "*",
    h2: "**",
    h3: "***",
    p: "",
    img: 'img:{src}',
    small: ".",
}

export const departmentOptions = [
    { title: "D&D", value: "D&D", id: 1 },
    { title: "WEB", value: "WEB", id: 2 },
    { title: "ПРОЧЕЕ", value: "OTHER", id: 3 },
]

export const webSocketChannel = `channel_for_everyone`;