import { modalAnimationType } from '@/model'
import { slogan } from './project'
import { keysQ } from '@/store/q-store'

export { axiosInstance } from '@/service/instance'

export const qpk: { [key in keysQ]: keysQ } = {
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

export const dftSource = { id: 1, name: 'Кастомный' }

export const sourses = {
    map: [
        { value: '0', title: 'Все' },
        {
            title: 'Кастомный',
            value: 1,
        },
        {
            title: 'Мосты',
            value: 14
        },
        {
            title: 'Фермы',
            value: 15
        },
        {
            title: 'Лес',
            value: 16
        },
        {
            title: 'Внутренности',
            value: 17
        },
        {
            title: 'Пещеры',
            value: 18
        },
        {
            title: 'Горы',
            value: 19
        },
        {
            title: 'Дорога',
            value: 20
        },
        {
            title: 'Крепости',
            value: 21
        },
        {
            title: 'Города',
            value: 22
        },
    ],
    entity: [
        { value: '0', title: 'Все' },
        {
            value: 1,
            title: 'Кастомный',
        },
        {
            value: 2,
            title: 'Звери'
        },
        {
            value: 3,
            title: 'Люди'
        },
        {
            value: 4,
            title: 'Исчадия'
        },
        {
            value: 5,
            title: 'Драконы'
        },
        {
            value: 6,
            title: 'Растения'
        },
        {
            value: 7,
            title: 'Нежить'
        },
        {
            value: 8,
            title: 'Прочее'
        },
        {
            value: 9,
            title: 'Монстры'
        },
        {
            value: 10,
            title: 'Гумоноиды'
        },
        {
            value: 11,
            title: 'Дроу'
        },
        {
            value: 12,
            title: 'Гоблин'
        },
        {
            value: 13,
            title: 'Именные'
        }
    ],
    object: [
        { value: '0', title: 'Все' },
        { value: 1, title: 'Кастомный' },
        { value: 23, title: 'Сооружения' },
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

export const rollText = [
    'Везение небесных сил улыбнулось вам',
    'Фортуна свыше улыбнулась вам',
    'Небесный рандом одарил вас',
    'Судьбоносный рандом сулил вам',
]

export const noFindDataIcon = [
    '/icon/no-find-data-1.svg',
    '/icon/no-find-data-2.svg',
    '/icon/no-find-data-3.svg',
]

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
    { title: "ПРОЧЕЕ", value: "ПРОЧЕЕ", id: 3 },
]

export const departmentMap = new Map([
    [1, "D&D"],
    [2, "WEB"],
    [3, "ПРОЧЕЕ"]
])

export const themes = {
    wood: [
        "var(--theme-3)",
        "var(--theme-3-dark)",
        "var(--theme-3-darkness)",
        "var(--theme-3-light)",
    ],
    _: [
        "var(--theme-1)",
        "var(--theme-1-dark)",
        "var(--theme-1-darkness)",
        "var(--theme-1-light)",
    ],
    __: [
        "var(--theme-2)",
        "var(--theme-2-dark)",
        "var(--theme-2-darkness)",
        "var(--theme-2-light)",
    ],
}

export const expires = (1 * 365 * 24 * 60 * 60)

export const dataTimeOption = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timezone: "UTC",
}