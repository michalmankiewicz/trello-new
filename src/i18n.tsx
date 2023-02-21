import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          hero: {
            title: 'Project <1>managment app</1>',
            description:
              'Trello is an app that will help you collaborate on your projects and reach new peaks of productivity. It also supports multiple languages . Join now to organize your tasks and change the way your team works.',
            getStarted: 'Get started',
          },
          header: {
            logIn: 'Log in',
            signUp: 'Sign up',
            signOut: 'Sign out',
            boards: 'Boards',
            editProfile: 'Edit profile',
          },
          logIn: {
            title: 'Log in',
            name: 'Name',
            password: 'Password',
            toggleText: `Don't have account yet? <1>Register</1>`,
          },

          signUp: {
            title: 'Sign up',
            name: 'Name',
            password: 'Password',
            toggleText: 'Already have an account? <1>Sign in</1>',
          },

          inputError: {
            required: 'This field is required',
            min: 'This field should have min 3 characters',
            max: 'This field should have max 10 characters',
          },
          serverError: {
            default: 'Something went wrong!',
            error403: 'Wrong login or password!',
            error404: 'Board was not found!',
            error409: 'This username already exist!',
          },
          boards: {
            title: 'Your boards',
            deleteQuestion: 'Are you sure to want to delete this?',
            delete: 'Delete',
            cancel: 'Cancel',
            titleLabel: 'Title',
            descriptionLabel: 'Description',
          },
        },
      },
      pl: {
        translation: {
          hero: {
            title: 'Aplikacja do <1>zarządzania projektami</1>',
            description:
              'Trello to aplikacja, która pomoże Ci współpracować przy projektach i osiągać nowe szczyty produktywności. Obsługuje również wiele języków. Dołącz teraz, aby uporządkować swoje zadania i zmienić sposób pracy zespołu.',
            getStarted: 'Rozpocznij',
          },
          header: {
            logIn: 'Zaloguj się',
            signUp: 'Zarejestruj się',
            signOut: 'Wyloguj się',
            boards: 'Tablice',
            editProfile: 'Edytuj profil',
          },
          logIn: {
            title: 'Zaloguj się',
            name: 'Nazwa',
            password: 'Hasło',
            toggleText: `Nie posiadasz konta? <1>Zarejestruj się</1>`,
          },

          signUp: {
            title: 'Zarejestruj się',
            name: 'Nazwa',
            password: 'Hasło',
            toggleText: 'Posiadasz już konto? <1>Zaloguj się</1>',
          },
          inputError: {
            required: 'To pole jest wymagane',
            min: 'To pole powinno zawierać min 3 litery',
            max: 'To pole powinno zawierać max 10 liter',
          },

          serverError: {
            default: 'Coś poszło nie tak!',
            error403: 'Niepoprawny login lub hasło!',
            error404: 'Nie znaleziono tablicy!',
            error409: 'Ta nazwa użytkownika już istnieje',
          },

          boards: {
            title: 'Twoje tablice',
            deleteQuestion: 'Jesteś pewien, że chcesz to usunąć?',
            delete: 'Usuń',
            cancel: 'Anuluj',
            titleLabel: 'Tytuł',
            descriptionLabel: 'Opis',
          },
        },
      },
    },
    detection: { order: ['queryString', 'cookie'] },
    cache: ['cookie'],
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
