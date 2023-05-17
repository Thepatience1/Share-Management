import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../admin1'

const Settings = () => {
  const [language, setLanguage] = useState('en'); // default language is English
  const [isDarkMode, setIsDarkMode] = useState(false); // default is light mode

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const strings = {
    en: {
      title: 'Settings',
      emailLabel: 'Email',
      emailPlaceholder: 'johndoe@example.com',
      passwordLabel: 'Password',
      languageLabel: 'Language',
      saveChangesButton: 'Save Changes',
      darkModeLabel: 'Dark Mode:',
      darkModeOnButton: 'On',
      darkModeOffButton: 'Off',
    },
    fr: {
      title: 'Paramètres',
      emailLabel: 'E-mail',
      emailPlaceholder: 'jean.dupont@example.com',
      passwordLabel: 'Mot de passe',
      languageLabel: 'Langue',
      saveChangesButton: 'Enregistrer les modifications',
      darkModeLabel: 'Mode Sombre :',
      darkModeOnButton: 'Activé',
      darkModeOffButton: 'Désactivé',
    },
    es: {
      title: 'Ajustes',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'juan.perez@example.com',
      passwordLabel: 'Contraseña',
      languageLabel: 'Idioma',
      saveChangesButton: 'Guardar Cambios',
      darkModeLabel: 'Modo Oscuro:',
      darkModeOnButton: 'Activado',
      darkModeOffButton: 'Desactivado',
    },
    am: {
      title: 'ቅንብሮች',
      emailLabel: 'ኢሜል',
      emailPlaceholder: 'johndoe@example.com',
      passwordLabel: 'የይለፍ ቃል',
      languageLabel: 'ቋንቋ',
      saveChangesButton: 'ተዛማጅ ደህንነት',
      darkModeLabel: 'የምስል ሞድ :',
      darkModeOnButton: 'ተነሳ',
      darkModeOffButton: 'አይነት',
    },
    ar: {
      title: 'الإعدادات',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'johndoe@example.com',
      passwordLabel: 'كلمة المرور',
      languageLabel: 'اللغة',
      saveChangesButton: 'حفظ التغييرات',
      darkModeLabel: 'الوضع الداكن:',
      darkModeOnButton: 'تشغيل',
      darkModeOffButton: 'إيقاف',
    },
  };

  const localizedStrings = strings[language];

  return (
    <Layout>
    <>
      <Head>
        <title>{localizedStrings.title} - Shareholder Management System</title>
      </Head>
      <div className={isDarkMode ? 'dark bg-gray-800 text-white min-h-screen' : 'bg-gray-100 min-h-screen'}>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">{localizedStrings.title}</h1>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                {localizedStrings.emailLabel}
              </label>
              <input
                className="form-input w-full mb-4"
                type="email"
                name="email"
                id="email"
                placeholder={localizedStrings.emailPlaceholder}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                {localizedStrings.passwordLabel}
              </label>
              <input
                className="form-input w-full mb-4"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="language">
                {localizedStrings.languageLabel}
              </label>
              <select
                className="form-select w-full mb-4"
                name="language"
                id="language"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="am">አማርኛ</option>
                <option value="ar">العربية</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">{localizedStrings.darkModeLabel}</span>
              <button
                type="button"
                className={
                  isDarkMode
                    ? 'bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800'
                    : 'bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300'
                }
                onClick={handleDarkModeToggle}
              >
                {isDarkMode ? localizedStrings.darkModeOnButton : localizedStrings.darkModeOffButton}
              </button>
            </div>
            <div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                {localizedStrings.saveChangesButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    </Layout>
  );
};

export default Settings;