require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf(process.env.BOT_API);

/**
 * Вызов бота и добавление двух кнопок 
 *
 */
bot.start((ctx) => { // Бот стартует
    ctx.reply('Выберите язык / Choose a language', Markup.inlineKeyboard([
        [Markup.button.callback('Русский', 'lang_ru'), Markup.button.callback('English', 'lang_en')]
    ]));
});

/**
 * 
 * Действие бота при нажатии на кпопку
 * Задание для Саши
 * 1. Переписать текст сообщения
 * 2. Переписать нименование кнопки
 */
bot.action('lang_ru', (ctx) => {
    ctx.reply('Из списка выберите необходимую толщину основного металла', Markup.inlineKeyboard([
        [Markup.button.callback('Выберать толщину', 'show_thikness')]
    ]))
})

/**
 * Подготовить English version
 * Задание для Саши
 * 1. Переписать текст сообщения
 * 2. Переписать нименование кнопки
 */

bot.action('lang_en', (ctx) => {
    ctx.reply("You've been selected English ")
})

/**
 * 
 * Смапить данные и сделать поиск по толщине
 * Сделать кнопки на каждую толщину
 * К каждой толщине привязать эскиз с указанием ширины и длины
 */

bot.action('show_thikness', (ctx) => {
    ctx.reply('Толщина 1 см')
})

bot.launch();