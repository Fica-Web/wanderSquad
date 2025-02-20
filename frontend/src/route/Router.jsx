import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Lazy-loaded components
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const PackagePage = lazy(() => import('../pages/PackagePage'));
const ServicePage = lazy(() => import('../pages/ServicePage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                index: true
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/packages',
                element: <PackagePage />
            },
            {
                path: '/services',
                element: <ServicePage />
            }
        ]
    }
])

export default router
