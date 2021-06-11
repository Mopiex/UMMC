import { LOCALES } from '../locales';

const RU_DATA = {
   [LOCALES.RUSSIAN]: {
      dashboard: 'Дашборд',

      sidebar: {
         login: 'Авторизация',
         register: 'Регистрация',
         404: 'Ошибка 404',
         500: 'Ошибка 500'
      },

      profile: 'Профиль',
      log_out: 'Выйти',
      users: 'Пользователи',
      settings: 'Настройки',
      home: 'Главная',
      add_chart: 'Добавить график',

      chart: {
         input: {
            placeholder: 'Название'
         },

         select: {
            'line-chart': 'Линейный график',
            'bar-chart': 'Гистограмма',
            'pie-chart': 'Круговой график',
            'radar-chart': 'Радарный график',
            'doughnut-chart': 'Кольцевой график',
            'polar-area-chart': 'График полярных областей',
            'horizontal-bar-chart': 'Горизонтальная гистограмма'
         }
      },

      day: 'День',
      month: 'Месяц',
      year: 'Год',

      months: {
         january: 'Январь',
         february: 'Февраль',
         march: 'Март',
         april: 'Апрель',
         may: 'Май',
         june: 'Июнь',
         july: 'Июль',
         august: 'Август',
         september: 'Сентябрь',
         october: 'Октябрь',
         november: 'Ноябрь',
         december: 'Декабрь'
      },

      item: {
         input: {
            placeholder: 'Название'
         }
      },

      login: {
         login_title: 'Авторизация',
         sign_in: 'Войти в свою учетную запись',

         name: {
            placeholder: 'Имя пользователя'
         },

         password: {
            placeholder: 'Пароль'
         },

         login_btn: 'Войти',
         forgot_password: 'Забыли пароль?',
         sign_up: 'Регистрация',
         infoText: 'Регистрация предоставит вам доступ к основным возможностям на сайте.',
         register: 'Зарегистрируйтесь прямо сейчас!'
      },

      register: {
         title: 'Регистрация',
         create_your_account: 'Создайте свою учетную запись',

         name: {
            placeholder: 'Имя пользователя'
         },

         password: {
            placeholder: 'Пароль'
         },

         repeat_password: {
            placeholder: 'Повторите пароль'
         },

         create_account: 'Создать учетную запись',
      },

      '404': {
         title: 'Упс! Вы потерялись.',
         description: 'Страница, которую вы ищете, не найдена.',

         input: {
            placeholder: 'Что вы ищете?'
         },

         search: 'Поиск'
      },

      '500': {
         title: 'Хьюстон, у нас проблема!',
         description: 'Страница, которую вы ищете, временно недоступна.',

         input: {
            placeholder: 'Что вы ищете?'
         },

         search: 'Поиск'
      }
   }
}

export default RU_DATA
