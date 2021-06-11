import { LOCALES } from './../locales';

const EN_DATA = {
   [LOCALES.ENGLISH]: {
      dashboard: 'Dashboard',

      sidebar: {
         login: 'Login',
         register: 'Register',
         404: 'Error 404',
         500: 'Error 500'
      },

      profile: 'Profile',
      log_out: 'Log out',
      users: 'Users',
      settings: 'Settings',
      home: 'Home',
      add_chart: 'Add chart',

      chart: {
         input: {
            placeholder: 'Title'
         },

         select: {
            'line-chart': 'Line chart',
            'bar-chart': 'Bar chart',
            'pie-chart': 'Pie chart',
            'radar-chart': 'Radar chart',
            'doughnut-chart': 'Doughnut chart',
            'polar-area-chart': 'Polar area chart',
            'horizontal-bar-chart': 'Horizontal bar chart'
         }
      },

      day: 'Day',
      month: 'Month',
      year: 'Year',

      months: {
         january: 'January',
         february: 'February',
         march: 'March',
         april: 'April',
         may: 'May',
         june: 'June',
         july: 'July',
         august: 'August',
         september: 'September',
         october: 'October',
         november: 'November',
         december: 'December'
      },

      item: {
         input: {
            placeholder: 'Title'
         }
      },

      login: {
         login_title: 'Login',
         sign_in: 'Sign In to your account',

         name: {
            placeholder: 'Username'
         },

         password: {
            placeholder: 'Password'
         },


         login_btn: 'Login',
         forgot_password: 'Forgot password?',
         sign_up: 'Sign up',
         infoText: 'Registration will give you access to the main features on the site.',
         register: 'Register Now!'
      },

      register: {
         title: 'Register',
         create_your_account: 'Create your account',

         name: {
            placeholder: 'Username'
         },

         password: {
            placeholder: 'Password'
         },

         repeat_password: {
            placeholder: 'Repeat password'
         },

         create_account: 'Create Account',
      },

      '404': {
         title: 'Oops! You\'re lost.',
         description: 'The page you are looking for was not found.',

         input: {
            placeholder: 'What are you looking for?'
         },

         search: 'Search'
      },

      '500': {
         title: 'Houston, we have a problem!',
         description: 'The page you are looking for is temporarily unavailable.',

         input: {
            placeholder: 'What are you looking for?'
         },

         search: 'Search'
      }
   }
}

export default EN_DATA
